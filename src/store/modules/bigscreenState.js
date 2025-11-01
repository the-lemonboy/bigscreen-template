import { defineStore } from 'pinia';

export const useScreenStateStore = defineStore('bigscreenState', {
  state: () => ({
    screenState: {
      screen1: true,
      screen2: false,
      screen3: false,
    },
    screenTwoBtnState: {
      screen1: true,
      screen2: false,
    },
    shipState: {},
    shipData: [],
    isShowShipBox: false,
    zoomToShip: null, // 缩放函数
    loadLSCGData: null, // 历史成果数据加载
    drawShipTrack: null,
    layerChange: null,
    clearShipTrcak: null,
  }),
  actions: {
    changeScreenState(actions) {
      const state = this.screenState;
      Object.keys(state).forEach((key) => {
        state[key] = key === actions;
      });
      if (actions === 'screen3' || actions === 'screen1') {
        if (this.loadLSCGData) this.loadLSCGData(actions);
      }
    },
    changeScreenTwoBtnState(actions) {
      const state = this.screenTwoBtnState;
      Object.keys(state).forEach((key) => {
        state[key] = key === actions;
      });
    },
    // 修改船舶信息框是否显示
    changeIsShowShipBox(state) {
      this.isShowShipBox = state;
    },
    changeShipState(value) {
      this.shipState = value;
      if (this.zoomToShip) this.zoomToShip(value);
    },
    setZoomToShipFun(fun) {
      this.zoomToShip = fun;
    },
    setLoadLSCGData(fun) {
      this.loadLSCGData = fun;
    },
    setDrawShipTrack(fun, fun2) {
      this.drawShipTrack = fun;
      this.clearShipTrcak = fun2;
    },
    setLayerChange(fun) {
      this.layerChange = fun;
    },
  },
});
