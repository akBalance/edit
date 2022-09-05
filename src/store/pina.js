import { defineStore } from 'pinia';

export const fileList = defineStore('filelist', {
  state: () => ({
    fileSource: [
      {
        id: 1,
        title: '标题',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
        count: 0,
        createTime: '',
        changeTime: '',
      },

      {
        id: 2,
        title: '标题',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
        count: 0,
        createTime: '',
        changeTime: '',
      },

      {
        id: 3,
        title: '标题1',
        content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
        count: 0,
        createTime: '',
        changeTime: '',
      },
    ],
  }),
  getters: {
    filterFileSource(keyword) {
      return this.fileSource;
    },
    sortFileSourec(type) {
      return this.fileSource;
    },

    moveFileSource(id, path) {
      return this.fileSource;
    },
  },
  actions: {
    addFileSource(f) {
      this.fileSource.push(f);
    },
    removeFileSource(id) {
      return this.fileSource.filter((item) => item.id != id);
    },
    copyFileSource(id) {
      return this.fileSource;
    },
  },
});
