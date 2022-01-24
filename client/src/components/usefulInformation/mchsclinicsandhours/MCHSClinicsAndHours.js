import React from 'react'

export const MCHSClinicsAndHours = () => {
    return(
        <table >
            <thead>
                <tr>
                    <th>Centres</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Bentleigh</strong><br/>542 Centre Road</td>
                    <td>8.30am - 5pm<br/>Open Session<br/>9am-12pm</td>
                    <td>8.30am - 5pm</td>
                    <td>8.30am - 5pm</td>
                    <td>8.30am - 5pm</td>
                    <td>8.30am - 5pm</td>
                </tr>
                <tr>
                    <td><strong>Glen Huntly</strong><br/>Corner Royal & Rosedale Avenues</td>
                    <td>8.30am - 5pm</td>
                    <td>8.30am - 5pm</td>
                    <td>8.30am - 5pm</td>
                    <td>8.30am - 5pm</td>
                    <td>8.30am - 5pm<br/>Open Session<br/>9am-12pm</td>
                </tr>
                <tr>
                    <td><strong>Elsternwick</strong><br/>274-276 Geln Eira Road</td>
                    <td>8.30am - 5pm</td>
                    <td>8.30am - 5pm</td>
                    <td>8.30am - 5pm</td>
                    <td>8.30am - 5pm<br/>Open Session<br/>10am-12pm</td>
                    <td>8.30am - 5pm</td>
                </tr>
                <tr>
                    <td><strong>McKinnon</strong><br/>186 McKinnon Road</td>
                    <td>Closed</td>
                    <td>Closed</td>
                    <td>8.30am - 5pm</td>
                    <td>8.30am - 5pm<br/>Open Session<br/>2pm-4pm</td>
                    <td>Closed</td>
                </tr>
                <tr>
                    <td><strong>Moorleigh</strong><br/>92 Bignell Road, Bentleigh East</td>
                    <td>8.30am - 5pm</td>
                    <td>8.30am - 5pm</td>
                    <td>8.30am - 5pm<br/>Open Session<br/>2pm-4pm</td>
                    <td>8.30am - 5pm</td>
                    <td>8.30am - 5pm</td>
                </tr>
                <tr>
                    <td><strong>Murrumbeena</strong><br/>107 Murrumbeena Road</td>
                    <td>8.30am - 5pm</td>
                    <td>8.30am - 5pm<br/>Open Session<br/>1.30pm-4pm</td>
                    <td>8.30am - 5pm</td>
                    <td>8.30am - 5pm</td>
                    <td>8.30am - 5pm</td>
                </tr>
                <tr>
                    <td><strong>Caulfield Town Hall</strong><br/>Corner Hawthorn & Glen Eira Road</td>
                    <td>8.30am - 5pm</td>
                    <td>8.30am - 5pm<br/>Open Session<br/>10am-12pm</td>
                    <td>8.30am - 5pm</td>
                    <td>8.30am - 5pm</td>
                    <td>8.30am - 5pm</td>
                </tr>
                <tr>
                    <td colSpan={6}>Saturday morning sessions are available by appointment at either the Bentleigh or Glen Huntly Centres, 9am-1pm</td>
                </tr>
                <tr>
                    <td colSpan={6}>Open sessions do not require an appointment</td>
                </tr>
                <tr>
                    <td colSpan={6}>Enquiries and appointments: please call the Council Service Centre on 95243333 or MCHS on 95243403</td>
                </tr>
                <tr>
                    <td colSpan={6}>This timetable is subject to change</td>
                </tr>
            </tbody>
        </table>
    )
}