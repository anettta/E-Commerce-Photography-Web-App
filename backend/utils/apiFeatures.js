class APIFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  searchProduct() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};
    this.query = this.query.find({ ...keyword });
    return this;
  }
  searchStory() {
    const keyword = this.queryStr.keyword
      ? {
          story: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};
    this.query = this.query.find({ ...keyword });
    return this;
  }

  filterProducts() {
    const queryCopy = { ...this.queryStr };

    // Removing fields from the query
    const removeFields = ["keyword", "limit", "page"];
    removeFields.forEach((field) => delete queryCopy[field]);

    // Advance filter for price, ratings, etc
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);

    this.query = this.query.find(JSON.parse(queryStr));
    return this;
  }
  filterStories() {
    const queryCopy = { ...this.queryStr };

    // Removing fields from the query
    const removeFields = ["keyword", "limit", "page"];
    removeFields.forEach((field) => delete queryCopy[field]);

    // Advance filter for price, ratings, etc
    // let queryStr = JSON.stringify(queryCopy);
    // queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (match) => `$${match}`);

    // this.query = this.query.find(JSON.parse(queryStr));
    this.query = this.query.find(queryCopy);
    return this;
  }

  pagination(resPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;
    const skip = resPerPage * (currentPage - 1);
    this.query = this.query.limit(resPerPage).skip(skip);
    return this;
  }
}

export default APIFeatures;
