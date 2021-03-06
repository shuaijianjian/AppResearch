import { NativeModules, Platform} from 'react-native'; 
const gethModule = NativeModules.GethModule;

/**
 * 初始化客户端
 *
 * @param {*} {rawurl=''} 以太坊[geth和parity]节点
 */
function init({rawurl=''}){
    gethModule.init(rawurl);
}


function generateWallet(){
    gethModule.generateWallet();
}

function createKeyStore(){
    gethModule.createKeyStore();
}

function importKeyStore(){
    gethModule.importKeyStore();
}

function transferEth(){
    gethModule.transferEth();
}





/**
 * 账户余额
 *
 * @param {*} {context='', account='', number=''}
 */
async function getBalance({ account='' }){
    try {
        const datas = await gethModule.getBalance( account );
        console.log('==============getBalance======================');
        console.log(datas);
    } catch (error) {
        console.log('===============getBalance=====================');
        console.log(error);        
    }
}



/**
 * 创建钱包
 *
 */
async function newWallet(){
    try {
        const datas = await gethModule.newWallet();
        console.log('==============newWallet======================');
        console.log(datas);
    } catch (error) {
        console.log('===============newWallet=====================');
        console.log(error);        
    }
    ;
}


function doSomethingExpensive(){
    const param = '121212121212';
    gethModule.doSomethingExpensive(param ,(error, events) => {
        console.log('============doSomethingExpensive========================');

        if (error) {
          console.error(error);
        } else {
          console.log('====================================');
          console.log(events);
          console.log('====================================');
        }
      });
}



export default {
    init,
    generateWallet,
    createKeyStore,
    importKeyStore,
    transferEth,


    getBalance,
    newWallet,
    doSomethingExpensive
};