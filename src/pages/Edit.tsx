import { useEffect, useState } from 'react'
import { Form } from '../components/Form'
import { Header } from '../components/Header'
import { LayoutPag } from '../components/LayoutPage'
import { Section } from '../components/Section'
import { MealsProps } from '../types/App-types'
import { useCookies } from 'react-cookie'
import { api } from '../lib/axios'
import { useParams } from 'react-router-dom'

export const Edit = () => {
  const [meal, setMeal] = useState({} as MealsProps)
  const params = useParams()
  const [cookie] = useCookies(['token'])

  useEffect(() => {
    const getData = async () => {
      const response = await api.get(`/meals/${params.id}`, {
        headers: { Authorization: `Bearer ${cookie.token}` },
      })

      setMeal(response.data)
    }

    getData()
  }, [cookie, params])

  return (
    <LayoutPag color="bg-gray-5">
      <Header title="Nova refeição" iconColor="text-gray-2" />
      <Section>
        <Form state="update" data={meal} />
      </Section>
    </LayoutPag>
  )
}
