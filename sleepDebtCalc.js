const getSleepHours = day => {
    switch (day) {
        case 'monday':
            return 7;
            break;
        case 'tuesday':
            return 7;
            break;
        case 'wednesday':
            return 7;
            break;
        case 'thursday':
            return 7;
            break;
        case 'friday':
            return 7;
            break;
        case 'saturday':
            return 7;
            break;
        case 'sunday':
            return 7;
            break;
    }
};

const getActualSleepHours = () => 7 + 7 + 7 + 7 + 7 + 7 + 7 ;

const getIdealSleepHours =  idealHours => idealHours * 7 

const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours()
    const idealSleepHours = getIdealSleepHours(7)

    if (actualSleepHours === idealSleepHours) {
        console.log('Perfect amount of sleep!')
    } 
    
    else if (actualSleepHours > idealSleepHours) {
        console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than needed!')
    } 
    
    else {
        console.log('You need ' + (idealSleepHours - actualSleepHours) + ' hours more sleep!!')
    }
}

console.log(calculateSeepDebt())