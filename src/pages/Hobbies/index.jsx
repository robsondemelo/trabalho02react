import { Video } from "../../components/Main";

export const Hobbies = () => {
    return(
        <>
        <div className="container">
            <h1 className="text-center">Hobbies:</h1>
            <p>Meus hobbies são consertar coisas, assistir filmes antigos abaixo dos anos 1950, jogar video-games antigos e ler quadrinhos da Disney.</p>
        </div>
        <div className="container">
            <h2 className="text-center">Alguns vídeos que gosto:</h2>
            
            <div className="container">
                <div className="row">
                    <Video titulo="007 Contra Golden Eye" video="lcOqUE0u1LM"></Video>
                    <Video titulo="Walk Like an Egiptian" video="Cv6tuzHUuuk"></Video>
                    <Video titulo="Mario 64" video="1uDQ8mTYUHQ"></Video>

                </div>


            </div>
        </div>
        </>
    )
}