import React, { useState } from 'react'
import { isMobileSafari } from 'react-device-detect';

import { Bell, BellOff } from 'react-feather'

import useSWR from 'swr'

import Page from '../components/page'
import Section from '../components/section'
import Pills from '../components/pills'

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Settings = () => {
    const [notifications, setNotifications] = useState(false)
    const [groupFilter, setGroupFilter] = useState(true)

    const { data } = useSWR(`${process.env.ecranConnectesAddress}/v1/ade`, fetcher)

    return (
        <Page title='Paramètres' subtitle={<p className="text-sm dark:text-gray-200">Ces paramètres seront enregistrés sur votre appareil.</p>}>
            <Section>
                

                <Section>
                    <h3>Notifications</h3>
                    <p className="text-xs dark:text-gray-200">Recevez des notifications de la part de l&apos;IUT en cas d&apos;informations urgentes.</p>
                    <button type="button" onClick={() => setNotifications(!notifications)} disabled={isMobileSafari} className="flex items-center justify-center px-2 py-2 my-3 text-sm bg-blue-400 disabled:opacity-50 disabled:animate-none animate-vibrate-1 space-x-3 rounded-lg lg:w-auto focus:outline-none text-white">
                        {notifications ? <BellOff size={16} /> : <Bell size={16} />}
                        <span>{notifications ? 'Désactiver' : 'Activer'}</span>
                    </button>
                    {!isMobileSafari && <p className="text-xs dark:text-gray-200">iOS ne permet pas à l&apos;heure actuelle de recevoir les notifications d&apos;un site internet. Veuillez utiliser un autre navigateur; comme <b>Chrome</b> ou <b>Firefox</b>.</p>}
                </Section>

                <Section>
                    <h3>Emploi du temps sélectionné</h3>
                    <p className="text-sm dark:text-gray-200 mb-4">Vous pouvez le changer à tout moment. Il est accessible hors-ligne.</p>

                    <Pills currentValue={groupFilter} onValueChange={setGroupFilter} data={[
                        { value: true, label: 'Tout' },
                        { value: 'year', label: 'Année' },
                        { value: 'group', label: 'Groupe' },
                        { value: 'halfGroup', label: 'Demi-groupe' },
                        { value: 'teacher', label: 'Enseignant' }
                    ]} />

                    <div className="relative inline-block w-full text-gray-700 mt-6">
                        {data && (<>
                            <select className="w-full h-10 pl-3 pr-6 text-base dark:text-gray-300 placeholder-gray-600 dark:bg-gray-900 border dark:border-transparent rounded-lg appearance-none focus:outline-none focus:ring focus:border-blue-300" placeholder="Emploi du temps à sélectionner">
                                {data.filter(({ type }) => groupFilter === true || type === groupFilter)
                                     .map(({ id, title }) => <option key={id} value={id}>{title}</option>)}
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd" />
                                </svg>
                            </div>
                        </>)}
                    </div>
                </Section>
            </Section>

        </Page>
        )
    }

export default Settings