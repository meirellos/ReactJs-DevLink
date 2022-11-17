import './home.css'

export default function Home(){
    return(
        <div className='home-container'>
            <h1>Vinicius Meirelles</h1>
            <span>Meus Links 👇</span>

           <main className='links'>
            <section className='link-area'>
                <a href='#'>
                    <p className='link-text'>Meu LinkedIn</p>
                </a>
            </section>

            <section className='link-area'>
                <a href='#'>
                    <p className='link-text'>Meu Github</p>
                </a>
            </section>

            <section className='link-area'>
                <a href='#'>
                    <p className='link-text'>Meu Instagram</p>
                </a>
            </section>

           </main>

        </div>
    )
}