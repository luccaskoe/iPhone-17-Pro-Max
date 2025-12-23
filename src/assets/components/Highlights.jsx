
function Highlights() {

  return (

    <section className="bg-black py-20 px-6" id="design">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-5xl font-bold mb-4">
                    Design Inovador
                </h2>
                <p className="text-xl text-gray-400">
                    Cada detalhe foi pensado para criar a melhor experiência
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                <div className="bg-gray-900 rounded-3xl p-8">
                    <img className="w-full rounded-2xl mb-4" src="/img/titanium-design.jpg" alt="iphone-titanium" />
                    <h3 className="font-bold mb-2 text-3xl">
                        Titânio Premium
                        </h3>
                    <p className="text-gray-300">
                        O design de titanium oferece uma durabilidade excepcional, com uma superfície suave e resistente ao desgaste.
                    </p>
                </div>

                <div  className="bg-gray-900 rounded-3xl p-8">
                    <img className="w-full rounded-2xl mb-4" src="/img/ios-features.jpg" alt="ios-2025"/>
                    <h3  className="font-bold mb-2 text-3xl">
                        IOS 26
                    </h3>
                    <p className="text-gray-300">
                        A nova versão do iOS traz uma série de recursos inovadores, como o suporte a Apple Intelligence, o novo sistema de câmera e o novo design do Home.
                    </p>
                </div>
            </div>
        </div>


        <div className="bg-gray-900 rounded-3xl p-12 mb-16" id="performance">
            <h3 className="text-4xl font-bold mb-6 text-grandient">
                A18 Pro
            </h3>
            <p className="text-xl text-gray-300 mb-8">
                O chip A18 Pro é o mais poderoso do mercado, com uma arquitetura de 64 bits e suporte a gráficos integrados.
            </p>
            <img className="w-full rounded-2xl mb-4" src="/img/chip-a18-pro.jpg" alt="chip a18"  />

            <ul className="space-y-3 text-gray-300 font-bold">
                <li>• Hexa-core (2 de Desempenho + 4 de Eficiência) com velocidade máxima de 4.26 GHz. </li>
                <li>• 6 núcleos com Neural Accelerators. </li>
                <li>• Contendo  12 GB de RAM, oferecendo mais fluidez para multitarefas. </li>
                <li>• Contem hardware para Ray Tracing e um Neural Engine.</li>
                <li>• 3 nanômetros para maior eficiência energética e potência.</li>
            </ul>
        </div>


        <div id="camera" className="text-center">
            <h3 className="text-4xl font-bold mb-18">
                Sistema de câmera Pro avançado
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
                    <h3 className="text-4xl font-bold text-red-800 mb-4"> 48MP </h3>
                    <h4 className="text-xl font-semibold mb-2">Principal</h4>
                    <p className="text-gray-400">Sensor quad-pixel com foco automático</p>
                </div>

           
                <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
                    <h3 className="text-4xl font-bold text-blue-700 mb-4"> 12MP </h3>
                    <h4 className="text-xl font-semibold mb-2">Ultra Wide</h4>
                    <p className="text-gray-400">Campo de visão de 120° com modo noturno</p>
                </div>
    

                <div className="bg-gray-900 rounded-2xl p-8 hover:scale-105 cursor-pointer transition-all duration-300">
                    <h3 className="text-4xl font-bold text-red-800 mb-4"> 12MP </h3>
                    <h4 className="text-xl font-semibold mb-2">Telefoto 5x</h4>
                    <p className="text-gray-400">Zoom óptico de 5x mais estabilizado</p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Highlights
