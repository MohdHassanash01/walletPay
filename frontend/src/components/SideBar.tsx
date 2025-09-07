import { Home , UserPen, LayoutDashboard, Wallet   } from "lucide-react"
import type { ElementType } from "react"
import { Link } from "react-router-dom"

export function SideBar(){
  return (
    <>

    <aside className="sticky top-0 overflow-y-auto pb-4 flex flex-col   lg:hidden  pt-5 px-4 h-fit border-r-1 border-neutral-500">

<div>
    
    <div className="flex flex-col gap-4">
        
          <SmallSidebarItem Icon={Home} title="Home" url="/"/>

    <SmallSidebarItem Icon={LayoutDashboard } title="Dashboard" url="/dashboard"/>

        <SmallSidebarItem Icon={Wallet } title="Wallet" url="/Wallet"/>

           <SmallSidebarItem Icon={Wallet } title="Transactions" url="/transaction"/>
       
    </div>

  <div className="pt-46">
       <SmallSidebarItem Icon={UserPen  } title="Profile" url="/profile"/>
  </div>
    
    
    </div> 



    </aside>
 



    <aside className="w-56 lg:sticky absolute top-0 overflow-y-auto pb-2 lg:flex px-2 flex-col gap-2  hidden pt-4  border-r-1 border-neutral-600 ">

<div >


<div className="flex flex-col gap-3 p-2">
    
<LargeSidebarItem Icon={Home} title="Home" url="/"/>

<LargeSidebarItem Icon={LayoutDashboard } title="Dashboard" url="/dashboard"/>

<LargeSidebarItem Icon={Wallet} title="Wallet" url="/wallet"/>

<LargeSidebarItem Icon={Wallet} title="Transactons" url="/transaction"/>


</div>

<div className="pt-70 px-2 ">
    <LargeSidebarItem Icon={UserPen} title="Profile" url="/profile"/>
</div>

</div>


    </aside>
    
    </>
  )
}


type SmallSidebarItemProps = {
  Icon: ElementType
  title:string 
  url:string
}


function SmallSidebarItem({Icon, title, url}: SmallSidebarItemProps){
  return <Link to={url}
  className="px-4 py-3 flex flex-col items-center rounded-lg gap-1 border-1 border-neutral-600 hover:bg-neutral-700/50">
    <Icon className="w-6 h-6"/>
    <div className="text-sm font-semibold">{title}</div>
  </Link>
}






function LargeSidebarItem({Icon,title, url}:SmallSidebarItemProps){
    return (<>
    <Link to={url} className={`w-full flex mb-2 items-center rounded-lg gap-4 p-3 border-1 border-neutral-600 hover:bg-neutral-700/50  "}`}>

        <Icon className="w-6 h-6"/>
        <div className='whitespace-nowrap overflow-hidden text-ellipsis font-semibold'>{title}</div>
    </Link>
    </>)
}