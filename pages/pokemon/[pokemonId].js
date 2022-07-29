import Link from 'next/link'
import Image from 'next/image'

import styles from '../../styles/Pokemon.module.css'

export const getStaticPaths = async () => {
    const maxPokemons = 150
    const api = 'https://pokeapi.co/api/v2/pokemon/'
    const response = await fetch(`${api}?limit=${maxPokemons}`)
    const data = await response.json()

    const paths = data.results.map((pokemon, index) => {
        return {
            params: { pokemonId: (index + 1).toString() },
        }
    })

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.pokemonId
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await response.json()

    return {
        props: { pokemon: data }
    }
}

export default function Pokemon({ pokemon }) {
    return (
        <div className={styles.pokemon_container}>
            <h2 className={styles.title}>{pokemon.name}</h2>
            <Image src={`https://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} width="200" height="200" />
            <div className={styles.margin}>
                <h3>#{pokemon.id}</h3>
            </div>
            <div className={styles.margin}>
                <h3>Tipos</h3>
                <div className={styles.types_container}>
                    {pokemon.types.map((item, index) => (
                        <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>
                    ))}
                </div>
            </div>
            <div className={styles.data_container}>
                <div className={styles.data_height}>
                    <h4>Altura</h4>
                    <p>{pokemon.height * 10} cm</p>
                </div>
                <div className={styles.data_weight}>
                    <h4>Peso</h4>
                    <p>{pokemon.weight / 10} Kg</p>
                </div>
            </div>
        </div>
    )
}