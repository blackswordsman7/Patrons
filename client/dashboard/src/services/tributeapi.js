import Tribute from 'tribute-utils';
// connect to contracts on the network
const rDAIContract = new ethers.Contract(
    CONTRACTS.rtoken.kovan,
    rDAIabi,
    walletProvider.getSigner()
);
const DAIContract = new ethers.Contract(
    CONTRACTS.dai.kovan,
    DAIabi,
    walletProvider.getSigner()
);
const tribute = new Tribute(DAIContract, rDAIContract, address[0]);

export default tribute;