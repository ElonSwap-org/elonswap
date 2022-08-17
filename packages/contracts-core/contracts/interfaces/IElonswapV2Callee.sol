pragma solidity >=0.5.0;

interface IElonswapV2Callee {
    function uniswapV2Call(address sender, uint amount0, uint amount1, bytes calldata data) external;
}
