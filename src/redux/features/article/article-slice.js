import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ARTICLE_API} from "../../../api/article";
import {articles} from "./article-data";


const getArticles = createAsyncThunk(
    'articles/getArticles',
    async ({
               values,
               showMessage
           }, {rejectWithValue}) => {
        try {
            const response = await ARTICLE_API.getArticles({...values});
            showMessage(response.data.message, {variant: 'success'});
            return response.data;
        } catch (e) {
            const {message} = e.response.data;
            showMessage(message, {variant: 'error'});
            return rejectWithValue(message);
        }
    });

const articleSlice = createSlice({
    name: 'articles',
    initialState: {
        articleLoading: false,
        articleMessage: null,
        articleError: null,
        articles: [...articles],
        article: {
            ...articles[0]
        }
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getArticles.pending, (state) => {
            state.articleLoading = true;
            state.articleError = null;
            state.articleMessage = null;
        }).addCase(getArticles.fulfilled, (state, action) => {
            state.articleLoading = false;
            state.articleError = null;
            state.articleMessage = action.payload.message;
            state.message = action.payload.data;
        }).addCase(getArticles.rejected, (state, action) => {
            state.articleLoading = false;
            state.articleError = action.payload;
            state.articleMessage = null;
            state.message = null
        })
    }
});

export const selectArticle = state => state.article;

export const ARTICLE_ACTION_CREATORS = {getArticles};

export default articleSlice.reducer;
