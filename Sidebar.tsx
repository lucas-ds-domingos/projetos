import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Home, FileText, ChevronRight, Bell, LogOut } from "lucide-react";
import logo2 from "../../componentes/logo2.png";

const menuItems = [
  { name: "Home", icon: Home },
  { name: "Ordem de Serviço", icon: FileText },
  { name: "Contas a Pagar", icon: FileText },
  { name: "Contas a Receber", icon: FileText, subItems: ["Fluxo de Caixa", "DRE"] },
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);

  // Fecha os submenus quando a sidebar for minimizada
  useEffect(() => {
    if (!isExpanded) {
      setOpenSubMenu(null);
    }
  }, [isExpanded]);

  return (
    <div className="flex h-screen">
      <motion.div
        animate={{ width: isExpanded ? 250 : 80 }}
        className="bg-[#2C3E50] h-full p-4 flex flex-col text-[#7F8C8D] relative rounded-xl"
      >
    <div className="flex items-center mb-4 gap-2 justify-start">
      <button onClick={() => setIsExpanded(!isExpanded)} className="flex items-center">
        <img 
          src={logo2} 
          alt="Logo" 
          className={`transition-all ${isExpanded ? "w-20 h-17" : "w-12 h-auto"} object-contain`}
        />
        {isExpanded && <span className="text-2xl font-bold">Decisium</span>}
      </button>
    </div>

        <div className="border-t-2 border-black pt-4"></div>

        <nav className="space-y-2">
          {menuItems.map(({ name, icon: Icon, subItems }) => (
            <div key={name} className="relative">
              <button
                className="flex items-center justify-between p-2 w-full hover:bg-[#e2e2e2] hover:text-black rounded-md"
                onClick={() => {
                  if (isExpanded) {
                    setOpenSubMenu(openSubMenu === name ? null : name);
                  }
                }}
                disabled={!isExpanded} // Impede clique quando minimizado
              >
                <div className="flex items-center space-x-2">
                  <Icon size={24} />
                  {isExpanded && <span>{name}</span>}
                </div>
                {subItems && isExpanded && (
                  <ChevronRight size={16} className={`transition-transform ${openSubMenu === name ? "rotate-90" : ""}`} />
                )}
              </button>

              {subItems && openSubMenu === name && isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="ml-6 mt-2 space-y-1"
                >
                  {subItems.map((sub) => (
                    <div key={sub} className="p-2  rounded-md hover:bg-[#e2e2e2] text-sm hover:text-black">
                      {sub}
                    </div>
                  ))}
                </motion.div>
              )}
            </div>
          ))}
        </nav>

        <div className="border-t-2 border-black pt-4 my-4"></div>

        <div className="mt-auto space-y-2">
          {isExpanded && <p className="mx-3">CENTRAL</p>}
          <button className="flex items-center space-x-2 p-2 hover:bg-blue-700 rounded-md">
            <Bell size={24} />
            {isExpanded && <span>Notificação</span>}
          </button>
          <button className="flex items-center space-x-2 p-2 hover:bg-red-700 rounded-md">
            <LogOut size={24} />
            {isExpanded && <span>Logout</span>}
          </button>
        </div>
      </motion.div>
    </div>
  );
}
