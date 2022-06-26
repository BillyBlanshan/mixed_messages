// Stars & Companion Stars
let primaryStar = {
    starType: '',
    size: 0,
    appearance: '',
    goldilocksZone: '',
    fuelScooping: true,
    discoveryReward: 0,
    planetGeneration: ''
};

const rareMainSequence = () => {
    const roll = Math.floor(Math.random() * 100);
    if (roll < 66) {
        primaryStar.starType = 'A-Type Main Sequence';
        const aSize = Math.floor(Math.random() * 10);
        if (aSize < 3) {
            primaryStar.size = 1.4;
        } else if (aSize < 7) {
            primaryStar.size = 1.6;
        } else if (aSize < 9) {
            primaryStar.size = 1.8;
        } else if (aSize === 9) {
            primaryStar.size = 2;
        } else {
            primaryStar.size = 2.1;
        }
        primaryStar.appearance = 'A ghostly blue-white star.';
        primaryStar.goldilocksZone = '2000ls';
        primaryStar.discoveryReward = 1500;
    } else if (roll < 99) {
        primaryStar.starType = 'B-Type Main Sequence';
        const bSizeArr = [3, 6, 10, 13, 16];
        primaryStar.size = bSizeArr[Math.floor(Math.random() * 5)];
        primaryStar.appearance = 'A brilliant blue star, five times larger than the sun.';
        primaryStar.goldilocksZone = 'N/A';
        primaryStar.discoveryReward = 1500;
    } else {
        primaryStar.starType = 'O-Type Main Sequence';
        const oSizeArr = [20, 35, 50, 70, 90];
        primaryStar.size = oSizeArr[Math.floor(Math.random() * 5)];
        primaryStar.appearance = 'A blinding blue-white star, ten times larger than the sun.';
        primaryStar.goldilocksZone = 'N/A';
        primaryStar.discoveryReward = 1500;
    }
}

const specialSpectralType = () => {
    const roll = Math.floor(Math.random() * 100);
    if (roll < 26) {
        primaryStar.starType = 'Red Giant';
        const rgSize = Math.floor(Math.random() * 10);
        if (rgSize < 3) {
            primaryStar.size = 0.3;
        } else if (rgSize < 6) {
            primaryStar.size = 0.4;
        } else if (rgSize < 8) {
            primaryStar.size = 0.5;
        } else if (rgSize === 8) {
            primaryStar.size = 0.6;
        } else if (rgSize === 9) {
            primaryStar.size = 0.7;
        } else {
            primaryStar.size = 0.8;
        }
        primaryStar.appearance = 'An enormous dying red star, over 500 times the size of the sun.';
        primaryStar.discoveryReward = 1200;
        primaryStar.planetGeneration = 'Giant';
    } else if (roll < 36) {
        primaryStar.starType = 'Carbon Star';
        const csSize = Math.floor(Math.random() * 10);
        if (csSize < 3) {
            primaryStar.size = 0.3;
        } else if (csSize < 6) {
            primaryStar.size = 0.4;
        } else if (csSize < 8) {
            primaryStar.size = 0.5;
        } else if (csSize === 8) {
            primaryStar.size = 0.6;
        } else if (csSize === 9) {
            primaryStar.size = 0.7;
        } else {
            primaryStar.size = 0.8;
        }
        primaryStar.appearance = 'An enormous, ruby-red star, over 200 times the size of the sun.';
        primaryStar.discoveryReward = 1200;
        primaryStar.fuelScooping = false;
        primaryStar.planetGeneration = 'Giant';
    } else if (roll < 41) {
        primaryStar.starType = 'Yellow Giant';
        const ygSizeArr = [0.8, 0.9, 1.0, 1.1, 1.2];
        primaryStar.size = ygSizeArr[Math.floor(Math.random() * 5)];
        primaryStar.appearance = 'An enormous yellow and white star, over 120 times the size of the sun.';
        primaryStar.discoveryReward = 1400;
        primaryStar.planetGeneration = 'Giant';
    } else if (roll < 46) {
        primaryStar.starType = 'Blue Giant';
        const bgSize = Math.floor(Math.random() * 10);
        if (bgSize < 3) {
            primaryStar.size = 1.4;
        } else if (bgSize < 7) {
            primaryStar.size = 1.6;
        } else if (bgSize < 9) {
            primaryStar.size = 1.8;
        } else if (bgSize === 9) {
            primaryStar.size = 1.9;
        } else {
            primaryStar.size = 2.0;
        }
        primaryStar.appearance = 'A colossal blue-white star over 30 times the size of the sun.';
        primaryStar.discoveryReward = 1500;
        primaryStar.planetGeneration = 'Giant';
    } else if (roll === 46) {
        primaryStar.starType = 'Black Hole';
        const bhSizeArr = [0.1, 50, 125, 370, 420, 650, 650, 800, 800, 1000];
        primaryStar.size = bhSizeArr[Math.floor(Math.random() * 10)];
        primaryStar.appearance = 'A colourless, warping void, between 30 - 1000 km wide.';
        primaryStar.discoveryReward = 20000;
        primaryStar.fuelScooping = false;
        primaryStar.planetGeneration = 'Massive';
    } else if (roll < 49) {
        primaryStar.starType = 'Neutron Star';
        const nsSize = Math.floor(Math.random() * 10);
        if (nsSize < 3) {
            primaryStar.size = 1.4;
        } else if (nsSize < 7) {
            primaryStar.size = 1.6;
        } else if (nsSize < 9) {
            primaryStar.size = 1.8;
        } else if (nsSize === 9) {
            primaryStar.size = 1.9;
        } else {
            primaryStar.size = 2.0;
        }
        primaryStar.appearance = 'A tiny, brilliant white star, only 11km in width.';
        primaryStar.discoveryReward = 19000;
        primaryStar.fuelScooping = false;
        primaryStar.planetGeneration = 'Massive';
    } else if (roll < 55) {
        primaryStar.starType = 'S-Type Star';
        const stSize = Math.floor(Math.random() * 10);
        if (stSize < 3) {
            primaryStar.size = 0.3;
        } else if (stSize < 6) {
            primaryStar.size = 0.4;
        } else if (stSize < 8) {
            primaryStar.size = 0.5;
        } else if (stSize === 8) {
            primaryStar.size = 0.6;
        } else if (stSize === 9) {
            primaryStar.size = 0.7;
        } else {
            primaryStar.size = 0.8;
        }
        primaryStar.appearance = 'An enormous deep purple star, over 200 times the size of the sun.';
        primaryStar.discoveryReward = 1200;
        primaryStar.fuelScooping = false;
        primaryStar.planetGeneration = 'L-Type';
    } else if (roll < 57) {
        primaryStar.starType = 'Wolf-Rayet Star';
        const wrsSizeArr = [0.8, 0.9, 1.0, 1.1, 1.2];
        primaryStar.size = wrsSizeArr[Math.floor(Math.random() * 5)];
        primaryStar.appearance = 'A colossal brilliant white star, over 30 times the size of the sun.';
        primaryStar.discoveryReward = 1200;
        primaryStar.fuelScooping = false;
        primaryStar.planetGeneration = 'Giant';
    } else if (roll < 68) {
        primaryStar.starType = 'White Dwarf';
        const wdSizeArr = [0.8, 0.9, 1.0, 1.1, 1.2];
        primaryStar.size = wdSizeArr[Math.floor(Math.random() * 5)];
        primaryStar.appearance = 'A tiny, brilliant white star, about the size of Earth.';
        primaryStar.discoveryReward = 10000;
        primaryStar.fuelScooping = false;
        primaryStar.planetGeneration = 'Massize';
    } else if (roll < 89) {
        primaryStar.starType = 'T-Tauri Star';
        const ttsSize = Math.floor(Math.random() * 10);
        if (ttsSize === 1) {
            primaryStar.size = 0.45;
        } else if (ttsSize < 4) {
            primaryStar.size = 0.5;
        } else if (ttsSize < 6) {
            primaryStar.size = 0.6;
        } else if (ttsSize < 9) {
            primaryStar.size = 0.7;
        } else {
            primaryStar.size = 0.8;
        }
        primaryStar.appearance = 'A burning orange star.';
        primaryStar.discoveryReward = 1200;
        primaryStar.fuelScooping = false;
        primaryStar.planetGeneration = 'K-Type';
    } else if (roll < 99) {
        primaryStar.starType = 'T-Type Brown Dwarf';
        const ttbdSizeArr = [0.01, 0.02, 0.03, 0.04, 0.05];
        primaryStar.size = ttbdSizeArr[Math.floor(Math.random() * 5)];
        primaryStar.appearance = 'A small, deep purple star, too dim to be seen from great distances.';
        primaryStar.discoveryReward = 1200;
        primaryStar.fuelScooping = false;
        primaryStar.planetGeneration = 'L-Type';
    } else {
        primaryStar.starType = 'Y-Type Brown Dwarf';
        const ytbdSizeArr = [0.005, 0.01, 0.015, 0.02, 0.025];
        primaryStar.size = ytbdSizeArr[Math.floor(Math.random() * 5)];
        primaryStar.appearance = 'A small, almost invisible star, no hotter than a domestic oven.';
        primaryStar.discoveryReward = 1200;
        primaryStar.fuelScooping = false;
        primaryStar.planetGeneration = 'L-Type';
    }
}

const getPrimaryStar = () => {
    const roll = Math.floor(Math.random() * 100);
    if (roll < 17) {
        primaryStar.starType = 'L-Type Brown Dwarf';
        const lSizeArr = [0.02, 0.03, 0.04, 0.06, 0.08];
        primaryStar.size = lSizeArr[Math.floor(Math.random() * 5)];
        primaryStar.appearance = 'A deep purple star, too dim to be seen from great distances.';
        primaryStar.goldilocksZone = 'N/A';
        primaryStar.fuelScooping = false;
        primaryStar.discoveryReward = 1200;
    } else if (roll < 76) {
        primaryStar.starType = 'M-Type Main Sequence';
        const mSizeArr = [0.1, 0.2, 0.3, 0.4, 0.5];
        primaryStar.size = mSizeArr[Math.floor(Math.random() * 5)];
        primaryStar.appearance = 'A reddish-purple star, too dim to be seen from great distances.';
        primaryStar.goldilocksZone = '100ls';
        primaryStar.discoveryReward = 1300;
    } else if (roll < 88) {
        primaryStar.starType = 'K-Type Main Sequence';
        const kSize = Math.floor(Math.random() * 5);
        if (kSize === 1) {
            primaryStar.size = 0.45;
        } else if (kSize < 4) {
            primaryStar.size = 0.5;
        } else if (kSize < 6) {
            primaryStar.size = 0.6;
        } else if (kSize < 9) {
            primaryStar.size = 0.7;
        } else {
            primaryStar.size = 0.8;
        }
        primaryStar.appearance = 'A burning orange star.';
        primaryStar.goldilocksZone = '200ls';
        primaryStar.discoveryReward = 1400;
    } else if (roll < 95) {
        primaryStar.starType = 'G-Type Main Sequence';
        const gStarArr = [0.8, 0.9, 1.0, 1.1, 1.2];
        primaryStar.size = gStarArr[Math.floor(Math.random() * 5)];
        primaryStar.appearance = 'A yellow star, like our own sun.';
        primaryStar.goldilocksZone = '500ls';
        primaryStar.discoveryReward = 1400;
    } else if (roll < 99) {
        primaryStar.starType = 'F-Type Main Sequence';
        const fStarArr = [1.0, 1.1, 1.2, 1.3, 1.4];
        primaryStar.size = fStarArr[Math.floor(Math.random() * 5)];
        primaryStar.appearance = 'A blazing yellow-white star.';
        primaryStar.goldilocksZone = '1000ls';
        primaryStar.discoveryReward = 1500;
    } else if (roll === 99) {
        rareMainSequence();
    } else {
        specialSpectralType();
    }
}
getPrimaryStar();
console.log(primaryStar);