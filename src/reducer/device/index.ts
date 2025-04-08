import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

// 定义初始状态
interface DeviceState {
    info: Object |null;
}

const initialState: DeviceState = {
    info: null,
};

// 创建一个 slice
const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
        // 添加设备

        setDeviceInfo: (state, action: PayloadAction<Object>) => {
            state.info = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDeviceInfo.fulfilled, (state, action) => {
            state.info = action.payload;
        });
    },
});

// 异步设置设备信息
export const fetchDeviceInfo = createAsyncThunk(
    'device/fetchDeviceInfo',
    async (deviceId: string, thunkAPI) => {
        const response = await fetch(`/api/device/${deviceId}`);
        const data = await response.json();
        return data;
    }
);

// 导出 actions 和 reducer
export const { setDeviceInfo } = deviceSlice.actions;
export default deviceSlice.reducer;
