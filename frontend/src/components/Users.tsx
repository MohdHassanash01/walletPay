

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";


const apiUrl = import.meta.env.VITE_API_URL;


const token = localStorage.getItem("token");
let currentUserId = "";

if (token) {
  const decoded = jwtDecode(token) as { id: string };
  currentUserId = decoded.id;
}

interface userI {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
}

function Users() {
  const [error, setError] = useState("");
  const [filterUser, setFilterUser] = useState<userI[]>([]);
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUsers() {
      const res = await axios.get(`${apiUrl}/api/v1/users`);
      setUsers(res.data.users);
      setLoading(false);
    }
    getUsers();
  }, []);

  useEffect(() => {
    axios
      .get(`${apiUrl}/api/v1/users?filter=` + filter)
      .then((res) => {
        setFilterUser(res.data.users);
        setError("");
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          setError(error.response?.data.message);
        }
      });
  }, [filter]);

  return (
    <div className="py-5">
      <h1 className="text-xl font-semibold">Find User</h1>

      <div className="flex pt-2">
        <input
          onChange={(e) => setFilter(e.target.value)}
          type="text"
          className="border-2 py-2 px-2 w-[70%] rounded-tl-lg rounded-bl-lg"
          placeholder="enter user name"
        />
        <button className="py-2 font-semibold px-3 border-2 rounded-tr-lg rounded-br-lg">
          Search
        </button>
      </div>

      {error && <h1 className="text-red-500 pt-3 text-lg">{error}</h1>}

      {loading ? (
        <h1 className="text-blue-500 text-xl text-semibold">Loading....</h1>
      ) : (
        <div className="lg:max-w-[70%]  max-w-[95%] flex flex-col gap-5 mt-10">
          {(filter ? filterUser : users)
            .filter((user) => user._id !== currentUserId)
            .map((user) => (
              <User key={user._id} user={user} />
            ))}
        </div>
      )}
    </div>
  );
}

export default Users;

interface UserProps {
  user: userI;
}

function User({ user }: UserProps) {
  const navigate = useNavigate();
  const [walletExists, setWalletExists] = useState<boolean | null>(null);

  useEffect(() => {
    async function checkWallet() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setWalletExists(false);
          return;
        }
        await axios.get(`${apiUrl}/api/v1/balance`, {
          headers: { token },
        });
        setWalletExists(true);
      } catch (err) {
        setWalletExists(false);
      }
    }

    checkWallet();
  }, []);

  if (walletExists === null) {
    return null; // Loading state
  }

  return (
    <div className="flex justify-between border-1 p-4 rounded-lg">
      <div className="flex">
        <div className="rounded-full h-12 w-12 bg-slate-800 flex justify-center mt-1 mr-2">
          <div className="flex flex-col justify-center h-full text-xl">
            {user.firstName[0]}
          </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
          <div>
            {user.firstName} {user.lastName}
          </div>
          <div className="text-slate-400">{user.phone}</div>
        </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
        {!walletExists ? (
          <p className="text-red-500 font-medium bg-red-200 h-8 px-2 rounded">
            Create your wallet to send money
          </p>
        ) : user.phone ? (
          <button
            onClick={() => {
              navigate(
                `/send?id=${user._id}&name=${user.firstName} ${user.lastName}`
              );
            }}
            className="py-1 px-2 rounded-md bg-blue-600 hover:bg-blue-700 font-semibold"
          >
            Send Money
          </button>
        ) : (
          <button className="py-1 px-4 rounded-md bg-red-600 hover:bg-red-500 font-semibold">
            User doesn't have wallet
          </button>
        )}
      </div>
    </div>
  );
}