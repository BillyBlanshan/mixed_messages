// // Stars & Companion Stars
const starFactory = (type, size, appearance, goldilocksZone, fuelScooping, discoveryReward, planetGeneration) => {
    return {
        type,
        size,
        appearance,
        goldilocksZone,
        fuelScooping,
        discoveryReward,
        planetGeneration
    }
}
const rareMainSequence = () => {
    
}

const genStar = () => {
    let type = '';
    let size = 0;
    let appearance = '';
    let goldilocksZone = '';
    let fuelScooping = false;
    let discoveryReward = 0;
    let planetGeneration = '';
    const roll = Math.floor(Math.random() * 100);
    if (roll < 17) {
        type = 'L-Type Brown Dwarf';
        const lSizeArr = [0.02, 0.03, 0.04, 0.06, 0.08];
        size = lSizeArr[Math.floor(Math.random() * 5)];
        appearance = 'A deep purple star, too dim to be seen from great distances.';
        goldilocksZone = 'N/A';
        discoveryReward = 1200;
    } else if (roll < 76) {
        type = 'M-Type Main Sequence';
        const mSizeArr = [0.1, 0.2, 0.3, 0.4, 0.5];
        size = mSizeArr[Math.floor(Math.random() * 5)];
        appearance = 'A reddish-purple star, too dim to be seen from great distances.';
        goldilocksZone = '100ls';
        fuelScooping = true;
        discoveryReward = 1300;
    } else if (roll < 88) {
        type = 'K-Type Main Sequence';
        const kSize = Math.floor(Math.random() * 5);
            if (kSize === 1) {
                size = 0.45;
            } else if (kSize < 4) {
                size = 0.5;
            } else if (kSize < 6) {
                size = 0.6;
            } else if (kSize < 9) {
                size = 0.7;
            } else {
                size = 0.8;
            }
        appearance = 'A burning orange star.';
        goldilocksZone = '200ls';
        fuelScooping = true;
        discoveryReward = 1400;
    } else if (roll < 95) {
        type = 'G-Type Main Sequence';
        const gStarArr = [0.8, 0.9, 1.0, 1.1, 1.2];
        size = gStarArr[Math.floor(Math.random() * 5)];
        appearance = 'A yellow star, like our own sun.';
        goldilocksZone = '500ls';
        fuelScooping = true;
        discoveryReward = 1400;
    } else if (roll < 99) {
        type = 'F-Type Main Sequence';
        const fStarArr = [1.0, 1.1, 1.2, 1.3, 1.4];
        size = fStarArr[Math.floor(Math.random() * 5)];
        appearance = 'A blazing yellow-white star.';
        goldilocksZone = '1000ls';
        fuelScooping = true;
        discoveryReward = 1500;
    } else if (roll === 99) {
        const roll2 = Math.floor(Math.random() * 100);
        if (roll2 < 66) {
            type = 'A-Type Main Sequence';
            const aSize = Math.floor(Math.random() * 10);
            if (aSize < 3) {
                size = 1.4;
            } else if (aSize < 7) {
                size = 1.6;
            } else if (aSize < 9) {
                size = 1.8;
            } else if (aSize === 9) {
                size = 2;
            } else {
                size = 2.1;
            }
            appearance = 'A ghostly blue-white star.';
            goldilocksZone = '2000ls';
            fuelScooping = true;
            discoveryReward = 1500;
        } else if (roll2 < 99) {
            type = 'B-Type Main Sequence';
            const bSizeArr = [3, 6, 10, 13, 16];
            size = bSizeArr[Math.floor(Math.random() * 5)];
            appearance = 'A brilliant blue star, five times larger than the sun.';
            goldilocksZone = 'N/A';
            fuelScooping = true;
            discoveryReward = 1500;
        } else {
            type = 'O-Type Main Sequence';
            const oSizeArr = [20, 35, 50, 70, 90];
            size = oSizeArr[Math.floor(Math.random() * 5)];
            appearance = 'A blinding blue-white star, ten times larger than the sun.';
            goldilocksZone = 'N/A';
            fuelScooping = true;
            discoveryReward = 1500;
        }
    } else {
        const roll3 = Math.floor(Math.random() * 100);
        if (roll3 < 26) {
            type = 'Red Giant';
            const rgSize = Math.floor(Math.random() * 10);
            if (rgSize < 3) {
                size = 0.3;
            } else if (rgSize < 6) {
                size = 0.4;
            } else if (rgSize < 8) {
                size = 0.5;
            } else if (rgSize === 8) {
                size = 0.6;
            } else if (rgSize === 9) {
                size = 0.7;
            } else {
                size = 0.8;
            }
            appearance = 'An enormous dying red star, over 500 times the size of the sun.';
            discoveryReward = 1200;
            fuelScooping = true;
            planetGeneration = 'Giant';
        } else if (roll3 < 36) {
            type = 'Carbon Star';
            const csSize = Math.floor(Math.random() * 10);
            if (csSize < 3) {
                size = 0.3;
            } else if (csSize < 6) {
                size = 0.4;
            } else if (csSize < 8) {
                size = 0.5;
            } else if (csSize === 8) {
                size = 0.6;
            } else if (csSize === 9) {
                size = 0.7;
            } else {
                size = 0.8;
            }
            appearance = 'An enormous, ruby-red star, over 200 times the size of the sun.';
            discoveryReward = 1200;
            planetGeneration = 'Giant';
        } else if (roll3 < 41) {
            type = 'Yellow Giant';
            const ygSizeArr = [0.8, 0.9, 1.0, 1.1, 1.2];
            size = ygSizeArr[Math.floor(Math.random() * 5)];
            appearance = 'An enormous yellow and white star, over 120 times the size of the sun.';
            discoveryReward = 1400;
            fuelScooping = true;
            planetGeneration = 'Giant';
        } else if (roll3 < 46) {
            type = 'Blue Giant';
            const bgSize = Math.floor(Math.random() * 10);
            if (bgSize < 3) {
                size = 1.4;
            } else if (bgSize < 7) {
                size = 1.6;
            } else if (bgSize < 9) {
                size = 1.8;
            } else if (bgSize === 9) {
                size = 1.9;
            } else {
                size = 2.0;
            }
            appearance = 'A colossal blue-white star over 30 times the size of the sun.';
            discoveryReward = 1500;
            fuelScooping = true;
            planetGeneration = 'Giant';
        } else if (roll3 === 46) {
            type = 'Black Hole';
            const bhSizeArr = [0.1, 50, 125, 370, 420, 650, 650, 800, 800, 1000];
            size = bhSizeArr[Math.floor(Math.random() * 10)];
            appearance = 'A colourless, warping void, between 30 - 1000 km wide.';
            discoveryReward = 20000;
            planetGeneration = 'Massive';
        } else if (roll3 < 49) {
            type = 'Neutron Star';
            const nsSize = Math.floor(Math.random() * 10);
            if (nsSize < 3) {
                size = 1.4;
            } else if (nsSize < 7) {
                size = 1.6;
            } else if (nsSize < 9) {
                size = 1.8;
            } else if (nsSize === 9) {
                size = 1.9;
            } else {
                size = 2.0;
            }
            appearance = 'A tiny, brilliant white star, only 11km in width.';
            discoveryReward = 19000;
            planetGeneration = 'Massive';
        } else if (roll3 < 55) {
            type = 'S-Type Star';
            const stSize = Math.floor(Math.random() * 10);
            if (stSize < 3) {
                size = 0.3;
            } else if (stSize < 6) {
                size = 0.4;
            } else if (stSize < 8) {
                size = 0.5;
            } else if (stSize === 8) {
                size = 0.6;
            } else if (stSize === 9) {
                size = 0.7;
            } else {
                size = 0.8;
            }
            appearance = 'An enormous deep purple star, over 200 times the size of the sun.';
            discoveryReward = 1200;
            planetGeneration = 'L-Type';
        } else if (roll3 < 57) {
            type = 'Wolf-Rayet Star';
            const wrsSizeArr = [0.8, 0.9, 1.0, 1.1, 1.2];
            size = wrsSizeArr[Math.floor(Math.random() * 5)];
            appearance = 'A colossal brilliant white star, over 30 times the size of the sun.';
            discoveryReward = 1200;
            planetGeneration = 'Giant';
        } else if (roll3 < 68) {
            type = 'White Dwarf';
            const wdSizeArr = [0.8, 0.9, 1.0, 1.1, 1.2];
            size = wdSizeArr[Math.floor(Math.random() * 5)];
            appearance = 'A tiny, brilliant white star, about the size of Earth.';
            discoveryReward = 10000;
            planetGeneration = 'Massize';
        } else if (roll3 < 89) {
            type = 'T-Tauri Star';
            const ttsSize = Math.floor(Math.random() * 10);
            if (ttsSize === 1) {
                size = 0.45;
            } else if (ttsSize < 4) {
                size = 0.5;
            } else if (ttsSize < 6) {
                size = 0.6;
            } else if (ttsSize < 9) {
                size = 0.7;
            } else {
                size = 0.8;
            }
            appearance = 'A burning orange star.';
            discoveryReward = 1200;
            planetGeneration = 'K-Type';
        } else if (roll3 < 99) {
            type = 'T-Type Brown Dwarf';
            const ttbdSizeArr = [0.01, 0.02, 0.03, 0.04, 0.05];
            size = ttbdSizeArr[Math.floor(Math.random() * 5)];
            appearance = 'A small, deep purple star, too dim to be seen from great distances.';
            discoveryReward = 1200;
            planetGeneration = 'L-Type';
        } else {
            type = 'Y-Type Brown Dwarf';
            const ytbdSizeArr = [0.005, 0.01, 0.015, 0.02, 0.025];
            size = ytbdSizeArr[Math.floor(Math.random() * 5)];
            appearance = 'A small, almost invisible star, no hotter than a domestic oven.';
            discoveryReward = 1200;
            planetGeneration = 'L-Type';
        }
    }

    return starFactory(type, size, appearance, goldilocksZone, fuelScooping, discoveryReward, planetGeneration);
}



let star1 = genStar();
console.log(`The primary star in this system is a ${star1.type} star with a solar mass of ${star1.size}. ${star1.appearance} The Goldilocks zone for this star is ${star1.goldilocksZone}. If you discover this star system you would receive ${star1.discoveryReward}cr.`)