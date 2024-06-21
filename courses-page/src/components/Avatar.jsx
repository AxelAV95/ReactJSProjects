
"use client";

import { Avatar, Dropdown } from "flowbite-react";

export function AvatarComponent() {
    return (
        <Dropdown
            label={<Avatar alt="User settings" img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/233bca4e-2c13-4de9-a446-b4e326bb7def/dfn131w-6e174a8f-eb70-4aec-9700-75f80c6d6bce.png/v1/fill/w_1280,h_1280,q_80,strp/gear_5_luffy_fanart_thing_by_onsoleguy_dfn131w-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzIzM2JjYTRlLTJjMTMtNGRlOS1hNDQ2LWI0ZTMyNmJiN2RlZlwvZGZuMTMxdy02ZTE3NGE4Zi1lYjcwLTRhZWMtOTcwMC03NWY4MGM2ZDZiY2UucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.FLFAPRO-nbhHNl_qjneD_WlvwfINoZouUfDdF5JQhIw" rounded />}
            arrowIcon={false}
            inline
        >
            <Dropdown.Header>
                <span className="block text-sm">Axel A.V</span>
                <span className="block truncate text-sm font-medium">villalobos.axel@yahoo.es</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
    );
}
