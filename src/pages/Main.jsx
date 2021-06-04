import React, { useEffect } from 'react'
import tw from 'twin.macro'
import Modal from 'react-modal';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { useRouter } from 'next/router'

const customStyles = {
  content: {
    top: '10%',
    left: '10%',
    right: '10%',
    bottom: 'auto%'
  }
};

const Main = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const router = useRouter()

  useEffect(() => {
    const data = localStorage.getItem('@triboschwantes:logged')
    if (!data) {
      router.push('/')
    }
  }, [])

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div tw="flex flex-col h-auto bg-gray-100">
      <div tw="flex sticky top-0 left-0 right-0 items-center bg-white p-3 filter drop-shadow-md justify-between">
        <div tw="flex items-center">
          <img src="/tribopicsmall.svg" />
          <span tw="text-xl ml-2 font-semibold">TRIBO SCHWANTES</span>
        </div>
        <button onClick={openModal}><img src="/hamburger.svg" /></button>
      </div>

      <div tw="p-5">
        <h1 id="Apresentacao" tw="text-2xl font-bold mb-4">Apresentação</h1>
        <article tw="text-justify text-lg">
          Os dois volumes do livro TRIBO SCHWANTES contam um pouco da história da família Schwantes. O mais antigo ancestral conhecido, PETER SCHWANTES, nasceu a 24 de maio de 1748 em Neukirchen, nordeste da Alemanha, hoje pertencente a Polônia com o nome de Belczna. Ele era o avô de Christian Friedrich Schwantes, casado com Dorothea Louise Schwantes nasc. lüdtke. Este casal de aventureiros enfrentou,  já como avós, o desafio de emigrar para o Brasil.<br></br><br></br>
          Christian Friedrich e Dorothea Louise são os patriarcas imigrantes da família Schwantes no Brasil. Eles chegaram em fins de agosto de 1858 à recém fundada colonização de Nova Petrópolis, RS, com os filhos Johann Carl August Friedrich, Wilhelm August Carl, Friedricke Wilhelmine Henriette, Wilhelm e Auguste. Em 1859 chegam mais dois filhos do casal: Christian Friedrich August Ferdinand e Christian Friedrich Gottlieb Ferdinand com suas famílias. No mesmo navio imigraram também a família do irmão do patriarca imigrante Friedrich Daniel Schwantes e a família sem parentesco definido de Wilhelm Schwantes.<br></br><br></br>
          Em 1868 imigrou a família da sobrinha do patriarca imigrante Wilhelmine Caroline Friedricke Schwantes, casada com Wilhelm Ramm e em 1875 a sobrinha Johanne Sophie Marie Wilhelmine Schwantes, casada com Carl Friedrich August Blödow. E, finalmente, no início da década de 1870 imigrou também o jovem solteiro Ernst Julius Theodor Schwantes, que casou no Brasil. Os descendentes de todos estes imigrantes formam a grande Família Schwantes  no Brasil.<br></br><br></br>
          Cabe a cada um dos inúmeros Schwantes do Brasil reunir os dados de sua respectiva família e enviá-los, através deste Site, para que possam ser incluídos no livro da grande Árvore Genealógica da Tribo Schwantes no Brasil.
        </article>

        <h1 id="Pesquisa" tw="text-2xl font-bold my-4">Pesquisa sobre as andanças dos Schwantes na Europa e no Brasil</h1>

        <div tw="border border-gray-300 rounded-sm bg-white">
          <img src="/tribopic.svg" tw="my-3" />
          <div tw="flex flex-col items-center px-4 text-white mb-3">
            <a href="https://drive.google.com/uc?export=download&id=1Ku3LzsCN1BxwEaBASeGW6AXCTIBsDcZ-" tw="bg-blue-700 mb-3 w-full p-2 rounded-sm font-semibold text-center">Volume 1<br></br>A origem da tribo</a>
            <a href="https://drive.google.com/file/d/1lX7fVAW3oO-EjVA4d4PsXFUCvYP97G9I" tw="bg-blue-700 w-full p-2 rounded-sm font-semibold">Volume 2<br></br>A árvore genealógica da tribo no Brasil</a>
          </div>
        </div>

        <h1 id="Registros" tw="text-2xl font-bold my-4">Registros dos Schwantes no Brasil</h1>

        <div tw="border border-gray-300 rounded-sm bg-white text-white px-4 py-3">
          <a href="https://drive.google.com/file/d/1-T6db1CBdqLXWURhiO812CbXBR5NigEb" tw="bg-blue-700 mb-3 w-full p-2 rounded-sm font-semibold">O diário do Augusto</a>
          <a href="https://drive.google.com/file/d/1hOSWyZbo1ckiOIAZIO583QCR97QrRIti" tw="bg-blue-700 w-full p-2 rounded-sm font-semibold">As memórias do Arlindo</a>
        </div>
      </div>
      <a href="//api.whatsapp.com/send?phone=5566999228007" tw="bg-white p-2 rounded-full fixed bottom-3 right-3 shadow-2xl"><img src="./whatsapp.png" tw="w-10 h-10" /></a>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <button onClick={closeModal}><img src="./close_big.svg" /></button>
        <div tw="flex flex-col mt-2 items-center justify-center">
          <AnchorLink tw="font-semibold mb-1 text-lg" href='#Apresentacao' onClick={closeModal}>Apresentacao</AnchorLink>
          <AnchorLink tw="font-semibold mb-1 text-lg" href='#Pesquisa' onClick={closeModal}>Pesquisa</AnchorLink>
          <AnchorLink tw="font-semibold text-lg" href='#Registros' onClick={closeModal}>Registros</AnchorLink>
        </div>
      </Modal>
    </div>
  )
}

export default Main