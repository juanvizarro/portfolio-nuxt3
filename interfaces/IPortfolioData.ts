import type { ISkill } from '@/interfaces/ISkill'
import type { IExperience } from './IExperience'
import type { ILocation } from './ILocation'
import type { IProject } from '@/interfaces/IProject'

interface ITranslation {
    speciality: string
    description: string
}

export interface IPortfolioData {
    translation: {
        en: ITranslation
        es: ITranslation
    }
    full_name: string
    skills: ISkill[]
    experiences: IExperience[]
    projects: IProject[]
    locations: ILocation[]
    cv: string
    contact_link: string
    profile_img: string
    github: string
    linkedin: string
    email: string
}