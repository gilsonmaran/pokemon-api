import Image from 'next/image'

import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>
                Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo.Atirei o pau no gatis, per gatis num morreus.Casamentiss faiz malandris se pirulitá.Manduma pindureta quium dia nois paga.
            </p>
            <p>
            Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.Não sou faixa preta cumpadi, sou preto inteiris, inteiris.Delegadis gente finis, bibendum egestas augue arcu ut est.Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
            </p>
            <Image src="/images/charizard.png" width="300" height="300" />
        </div>
    )
}