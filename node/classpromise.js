class Mypromise {
  constructor(executor) {
    this.status = "pending";
    this.data = undefined;
    this.callBacks = [];
    const resolve = (data) => {
      if (this.status !== "pending") {
        return;
      }
      this.status = "resolve";
      this.data = data;
      if (this.callBacks.length) {
        setTimeout(() => {
          this.callBacks.forEach((cbObj) => cbObj.resolvedCallBack(data));
        });
      }
    };
    const reject = (error) => {
      if (this.status !== "pending") {
        return;
      }
      this.status = "rejected";
      this.data = error;
      if (this.callBacks.length) {
        this.callBacks.forEach((cbObj) => cbObj.rejectedCallBack(error));
      }
    };
    try {
      executor(resolve, reject);
    } catch {
      reject(error);
    }
  }
  then(
    resolvedCallBack,
    rejectedCallBack = (error) => {
      throw error;
    }
  ) {}
  catch(rejectedCallBack) {}
  static race(promises) {}
  static all(promises) {}
  static resolve(data) {}
  static reject(error) {}
}
