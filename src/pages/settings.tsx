import { useState } from 'react'
import { isMobileSafari } from 'react-device-detect';

import { Bell, BellOff } from 'react-feather'

import Page from '../components/page'
import Section from '../components/section'


const Settings = () => {
    const [notifications] = useState(false)

    return (
        <Page title='Paramètres'>
            <Section>
                <h2 className="text-3xl">Paramètres</h2>
                <p className="text-sm text-gray-200">Ces paramètres seront enregistrés sur votre appareil.</p>

                <Section>
                    <h3>Notifications</h3>
                    <p className="text-xs text-gray-200">Recevez des notifications de la part de l&apos;IUT en cas d&apos;informations urgentes.</p>
                    <button type="button" disabled={isMobileSafari} className="flex items-center justify-center px-2 py-2 my-3 text-sm bg-blue-600 space-x-3 rounded-lg lg:w-auto focus:outline-none">
                        {notifications ? <BellOff size={16} /> : <Bell size={16} />}
                        <span>{notifications ? 'Désactiver' : 'Activer'}</span>
                    </button>
                </Section>
            </Section>

        </Page>
        )
    }

export default Settings