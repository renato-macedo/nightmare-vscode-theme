// @ts-ignore
import fs from 'fs';


interface JackSkellington {
    pumpkinKing: boolean,
    masterOfFreight: string,
    toAGuyInKectucky: MisterUnlucky
    purpose: () => void
    hiddenInACave?: 1000000

}

interface MisterUnlucky {
    scareYouRightOutOfYourPants: boolean; 
}
const makingChristmas = () => {
    console.log('Its so fun!');
    return () => {}
};

const NightmareBeforeChristmas: JackSkellington = {
    pumpkinKing: true,
    masterOfFreight: 'Demon of light',
    toAGuyInKectucky: {
        scareYouRightOutOfYourPants: true
    },
    purpose: makingChristmas(),
}