import React, { Component } from 'react';
import api from '../api';
import CategoryView from '../components/Main/CategoryView';

export default class Category extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  async componentDidMount() {
    const { data: categories } = await api.get('/api/categories/');

    const categoryArr = [];
    let category = null;
    categories.forEach((c, index) => {
      if (category !== c.main_category) {
        category = c.main_category;
        categoryArr.push({
          title: c.main_category,
          subCate: [c.sub_category],
        });
      }
    });
    console.log(categories);
    // this.setState({
    //   categories: categoryArr,
    // });
  }

  render() {
    const { categories } = this.state;
    return <CategoryView categories={categories} />;
  }
}
