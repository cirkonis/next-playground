/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from "react";
import Head from 'next/head'
import Link from "next/link";
import styles from '../styles/Home.module.css'

export async function getServerSideProps(){
    const response = await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json');

    return {
        props: {
            pokemon: await response.json(),
        }
    }
}

export default function Home({pokemon}) {
    return (
        <>
            <Head>
                <title>Playground</title>
            </Head>
            <div className={styles.grid}>
                {pokemon.map((pokemon) => (
                    <div className={styles.card} key={pokemon.id}>
                        <Link href={`/pokemon/${pokemon.id}`}>
                            <a>
                                <img
                                    src={`https://cataas.com/cat/gif/says/Hello?filter=sepia&color=orange&size=40&type=or`}
                                    alt={pokemon.name}
                                />
                                <p>{pokemon.name}</p>
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}



