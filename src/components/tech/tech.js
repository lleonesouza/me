import React from 'react'
import Techs from './mapTech'
import { ModalDiv} from './css'

// Icons
import ai from './icons/ai.png'
import node from './icons/node.svg'
import html from './icons/html.svg'
import gcloud from './icons/gcloud.svg'
import css from './icons/css.svg'
import watson from './icons/watson.png'
import ts from './icons/ts.png'
import redis from './icons/redis.png'
import postgresql from './icons/postgresql.png'
import mongodb from './icons/mongodb.png'
import data from './icons/data.png'
import elastic from './icons/elastic.png'
import react from './icons/react.gif'
import ReactLottie from './icons/react'

export default function tech() {
    let tech = [
        {
            title: 'NodeJS',
            hover: '',
            icon: node
        },
        {
            title: 'React',
            description: '',
            hover: '',
            icon: react,
            Lottie: ReactLottie
        },
        {
            title: 'React-native',
            description: '',
            hover: '',
            icon: react,
            Lottie: ReactLottie
        },
        {
            title: 'Electron',
            description: '',
            hover: '',
            icon: react,
            Lottie: ReactLottie
        },
        {
            title: 'PostgreSQL',
            description: '',
            hover: '',
            icon: postgresql
        },
        {
            title: 'MongoDB',
            description: '',
            hover: '',
            icon: mongodb
        },
        {
            title: 'ElasticSearch',
            description: '',
            hover: '',
            icon: elastic
        },
        {
            title: 'Redis',
            description: '',
            hover: '',
            icon: redis
        },
        {
            title: 'Watson IBM',
            description: '',
            hover: '',
            icon: watson
        },
        {
            title: 'Gcloud',
            description: '',
            hover: '',
            icon: gcloud
        },
        {
            title: 'Data Science',
            description: '',
            hover: '',
            icon: ai
        },
        {
            title: 'Data Visualization',
            description: '',
            hover: '',
            icon: data
        },
        {
            title: 'TypeScript',
            description: '',
            hover: '',
            icon: ts
        },
        {
            title: 'Html',
            description: '',
            hover: '',
            icon: html
        },
        {
            title: 'Css',
            description: '',
            hover: '',
            icon: css
        },
    ]

    return (
        <ModalDiv>
             
        {tech.map(tech => 
            <Techs tech={tech} />
        )}

        </ModalDiv>
    )
}
