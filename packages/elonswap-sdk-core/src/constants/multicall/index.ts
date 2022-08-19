import { ChainId } from 'elonswap-core-sdk'
import MULTICALL_ABI from './abi.json'
import { multicall as dogechainMulticall } from '../../dogechain_address.json'
import { multicall as pangolinMulticall } from '../../pangolin_address.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '',
  [ChainId.PANGOLIN]: pangolinMulticall,
  [ChainId.CRAB]: dogechainMulticall
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
