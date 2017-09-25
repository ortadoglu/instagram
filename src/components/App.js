import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';

import VisibleTodoList from '../containers/VisibleTodoList';
import VisibleImages from '../containers/VisibleImages';
import Header from './Header';

const App = () => (
    <div>
        <VisibleImages />
    </div>
)

export default App

/*
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
        <VisibleImages />
    </div>*/