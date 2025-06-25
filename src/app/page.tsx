
export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Menu lateral */}
      <aside className="w-full md:w-72 bg-blue-700 text-white p-4 flex flex-col">
        {/* Faixa laranja no topo do menu */}
        <div className="h-3 bg-orange-400 w-full rounded mb-4" />
        {/* Logo aumentado sem texto abaixo */}
        <div className="flex flex-col items-center mb-6">
          <img
            src="/logo-menu.png"
            alt="Gestão Simples Logo"
            className="w-64 h-auto mb-6"
          />
        </div>
        {/* Itens do menu */}
        <nav className="flex flex-col gap-4 text-center md:text-left">
          <a href="#" className="flex items-center gap-2 hover:text-yellow-300 justify-center md:justify-start">
            <span>👥</span> <span>Clientes</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-yellow-300 justify-center md:justify-start">
            <span>📦</span> <span>Estoque / Produtos</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-yellow-300 justify-center md:justify-start">
            <span>🛒</span> <span>Compras</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-yellow-300 justify-center md:justify-start">
            <span>💰</span> <span>Vendas</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-yellow-300 justify-center md:justify-start">
            <span>💳</span> <span>Financeiro</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-yellow-300 justify-center md:justify-start">
            <span>📊</span> <span>Dashboard</span>
          </a>
        </nav>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 flex flex-col items-center bg-white p-4">
        {/* Faixa laranja estilosa no conteúdo principal alinhada ao topo */}
        <div className="w-full h-3 bg-orange-400 rounded mb-6" />
        <img
          src="/logo-central.png"
          alt="Logo central"
          className="w-60 h-auto mb-6"
        />
        <h1 className="text-3xl font-semibold text-gray-800 mb-2 text-center">
          Bem-vindo ao Gestão Simples
        </h1>
        <p className="text-gray-600 text-center max-w-xl mb-6">
          Criado por Felipe Paes e Suelen de Sousa
        </p>
        {/* Contatos */}
        <div className="flex flex-col gap-2 text-center text-blue-700">
          <div className="flex items-center justify-center gap-2">
            <span>📱</span>
            <span>Suelen: (49) 99911-6550</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>📸</span>
            <span>@suelendesousa</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span>📸</span>
            <span>@felipepaes1987</span>
          </div>
        </div>
      </main>
    </div>
  );
}
