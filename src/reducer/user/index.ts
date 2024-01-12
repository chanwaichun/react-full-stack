import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "@/api/user";

export const setInfo = createAsyncThunk("user/setInfo", async (state, _) => {
	const res = await getUserInfo({ userId: state });
	return res.data;
});

const userSlice = createSlice({
	// 需要一个配置对象作为参数，通过对象的不同属性来指定它的配置
	name: "user", // 用来自动生成 action 中的 type
	initialState: {
		// state的初始值
		token: null,
		info: null
	},
	// 指定state的各种操作，直接在对象中添加方法
	reducers: {
		setToken: (state, data) => {
			// state是一个代理对象，可直接修改
			state.token = data.payload;
		},
		loginOut: state => {
			// console.log(state, action, clearToken);
			state.token = null;
		}
	},
	extraReducers: builder => {
		builder
			.addCase(setInfo.pending, (state, action) => {})
			.addCase(setInfo.fulfilled, (state, action) => {
				state.info = action.payload;
			})
			.addCase(setInfo.rejected, (state, action) => {});
	}
});
// 切片对象会自动的帮助我们生成action
export const { reducer: userReducer } = userSlice;
export const { setToken, loginOut } = userSlice.actions;
