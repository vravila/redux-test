import store from "../js/store/index";
import { addArticle } from "../js/actions/index";
import redux from 'redux';

window.store = store;
window.addArticle = addArticle;