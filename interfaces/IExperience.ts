import type { Locations } from '@/interfaces/ILocation'

export interface IExperience{
    logo: string|null
    description: string
    bussiness_name: string
    start_date: string
    end_date: string|null
    location_id: Locations
    job_title: string
    seniority: string
    skills: []
}