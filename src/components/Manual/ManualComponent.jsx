import './ManualComponent.css'
import read11 from '../../../images/read11.png'
import read22 from '../../../images/read22.png'
import readqr1 from '../../../images/readqr1.png'
import readqr2 from '../../../images/readqr2.png'
import readqr3 from '../../../images/readqr3.png'
import readqr4 from '../../../images/readqr4.png'
import writeqr1 from '../../../images/writeqr1.png'
import writeqr2 from '../../../images/writeqr2.png'
import writeqr3 from '../../../images/writeqr3.png'
import writeqr4 from '../../../images/writeqr4.png'
import write1 from '../../../images/write1.png'
import write2 from '../../../images/write2.png'
import write3 from '../../../images/write3.png'
import write4 from '../../../images/write4.png'

export function ManualComponent() {
    return (
        <div className="row-manual">
            <div className="row">
                <label className="labl-manual">WORKER MANUAL</label>
            </div>
            <p className='about'>
                The instructions provide a detailed guide on how employees 
                should use the NFC tag reading and writing functions, as well 
                as QR code scanning. The document outlines the specific steps 
                and procedures for employees to effectively utilize these features, 
                ensuring a proper understanding of the processes involved in 
                reading and writing NFC tags and scanning QR codes. By following 
                the instructions, employees should be well-equipped to leverage 
                these functionalities in a proficient manner, contributing to the 
                smooth operation and success of the designated tasks related to QR code 
                and NFC tag handling.
            </p>
            <span className="br"></span>
            <div className="row2">
                <label className="labl">READ NFC</label>
            </div>
            <span className="br2"></span>
            <p className='about'>
                1. Click the "Read" button and bring the tag near the reader 
                behind your smartphone.
                <span className="br"></span>
            </p>
            <img src={read11} />

            <p className='about'>
                2. Hold the NFC tag close to the reader until the reading action 
                is completed and the appropriate message is displayed. Repeat the 
                action by clicking the "Read" button again.
                <span className="br"></span>
            </p>
            <img src={read22} />
            <span className="br"></span>

            <div className="row2">
                <label className="labl">READ QR CODE</label>
            </div>
            <span className="br2"></span>
            <p className='about'>
                1. Click the "Request Camera Permissions" button.
                <span className="br"></span>
            </p>
            <img src={readqr1} />

            <p className='about'>
                2. Select your camera from the dropdown menu, and then click 
                the "Start Scanning" button. 
                <span className="br"></span>
            </p>
            <img src={readqr2} />

            <p className='about'>
                3. Point the camera at the QR code to decode it, and wait for 
                the decoded product information to be displayed. You can also 
                turn on the camera flash by clicking the "Switch on torch" button 
                if the code is poorly visible. After decoding the QR code, you can 
                stop scanning by clicking the "Stop Scanning" button.
                <span className="br"></span>
            </p>
            <img src={readqr3} />

            <p className='about'>
                4. Decoded QR codes are automatically stored in the list below, 
                from which you can remove them and save them directly to NFC tags.
                <span className="br"></span>
            </p>
            <img src={readqr4} />
            <span className="br"></span>

            <div className="row2">
                <label className="labl">WRITE QR TO NFC</label>
            </div>
            <span className="br2"></span>

            <p className='about'>
                1. Click the "Write QR to NFC" button and bring the tag near the reader 
                behind your smartphone.
                <span className="br"></span>
            </p>
            <img src={writeqr1} />

            <p className='about'>
                2. Hold the NFC tag close to the reader until the writing action 
                is completed and the appropriate "Success!" message is displayed. 
                Repeat the action by clicking the "Write QR to NFC" button.
                <span className="br"></span>
            </p>
            <img src={writeqr2} />

            <span className="br"></span>

            <div className="row2">
                <label className="labl">WRITE QR TO NFC (SERIAL)</label>
            </div>
            <span className="br2"></span>

            <p className='about'>
                1. Check the "SERIAL WRITING" checkbox, then click the "Write QR to NFC" 
                button to initiate serial writing. The currently used batch number will 
                appear in the list below. Additionally, you can select the "INDEXING" 
                checkbox for automatic product indexing (this option is also available in 
                non-serial writing mode). Then bring the tag close to the reader on the 
                back of the phone.
                <span className="br"></span>
            </p>
            <img src={writeqr3} />

            <p className='about'>
                2. Hold the NFC tag close to the reader until the writing action 
                is completed and the appropriate "Success!" message is displayed. 
                Next, move the tag away from the reader and wait until the information 
                about bringing the tag close to the reader is displayed again. 
                To stop serial writing click "SERIAL WRITING" checkbox.
                <span className="br"></span>
            </p>
            <img src={writeqr4} />
            <span className="br"></span>

            <div className="row2">
                <label className="labl">WRITE TO NFC</label>
            </div>
            <span className="br2"></span>

            <p className='about'>
                1. Click the "Write to NFC" button located in the list next to the 
                decoded QR code. The currently selected QR code will 
                appear above. Next bring the tag near the reader behind your smartphone.
                <span className="br"></span>
            </p>
            <img src={write1} />

            <p className='about'>
                2. Hold the NFC tag close to the reader until the writing action 
                is completed and the appropriate "Success!" message is displayed. 
                Repeat the action by clicking the "Write to NFC" button again.
                <span className="br"></span>
            </p>
            <img src={write2} />
            <span className="br"></span>

            <div className="row2">
                <label className="labl">WRITE TO NFC (SERIAL)</label>
            </div>
            <span className="br2"></span>

            <p className='about'>
                1. Check the "SERIAL WRITING" checkbox, then click the "Write to NFC" 
                button located in the list next to the decoded QR code to initiate serial writing. 
                The currently used batch number and selected QR code will appear above. Additionally, 
                you can select the "INDEXING" checkbox for automatic product indexing (this option 
                is also available in non-serial writing mode). Then bring the tag close to the reader on the 
                back of the phone.
                <span className="br"></span>
            </p>
            <img src={write3} />

            <p className='about'>
                2. Hold the NFC tag close to the reader until the writing action 
                is completed and the appropriate "Success!" message is displayed. 
                Next, move the tag away from the reader and wait until the information 
                about bringing the tag close to the reader is displayed again. 
                To stop serial writing click "SERIAL WRITING" checkbox.
                <span className="br"></span>
            </p>
            <img src={write4} />

        </div>
    );
}