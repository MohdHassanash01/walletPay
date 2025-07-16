import mongoose from "mongoose";
import { Request, Response } from "express";
import { walletModel } from "../../models/account.model";
import { transactionModel } from "../../models/transactions.model";

export async function transfer(req: Request, res: Response) {
    
  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const { amount, to } = req.body;
    //@ts-ignore
    const fromUserId = req.userId;

    // 🛡️ Validate input
    if (!amount || amount <= 0 || !to) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ message: "Invalid input" });
    }

    if (fromUserId === to) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ message: "Cannot transfer to yourself" });
    }

    // 🔍 Fetch sender's wallet
    const sender = await walletModel.findOne({ userId: fromUserId }).session(session);
    if (!sender || sender.balance < amount) {
      await session.abortTransaction();
      session.endSession();
      return res.status(400).json({ message: "Insufficient balance" });
    }

    // 🔍 Fetch receiver's wallet
    const receiver = await walletModel.findOne({ userId: to }).session(session);
    if (!receiver) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({ message: "Receiver not found" });
    }

    // 💸 Update sender's and receiver's wallet balances
    await walletModel.updateOne(
      { userId: fromUserId },
      { $inc: { balance: -amount } }
    ).session(session);

    await walletModel.updateOne(
      { userId: to },
      { $inc: { balance: amount } }
    ).session(session);

    // 🧾 Log transactions
    await transactionModel.create([
      {
        userId: fromUserId,
        amount,
        type: "debit",
        to,
      },
      {
        userId: to,
        amount,
        type: "credit",
        from: fromUserId,
      }
    ], { session,ordered: true  });

    // ✅ Finalize transaction
    await session.commitTransaction();
    session.endSession();

    return res.status(200).json({ message: "Transfer successful" });

  } catch (error) {
    console.error("Transfer failed:", error);
    await session.abortTransaction();
    session.endSession();
    return res.status(500).json({ message: "Internal Server Error" });
  }
}
