"use babel";

import { CompositeDisposable } from "atom";

export default {
  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();
    this.subscriptions.add(
      atom.commands.add("atom-workspace", {
        "atom-insert-console-log:log": () => this.log()
      })
    );
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  log() {
    console.log("AtomInsertConsoleLog was ran");
    let editor = atom.workspace.getActiveTextEditor();
    if (!editor) return;

    let selection = editor.getSelectedText();
    editor.insertText(`console.log(${selection}); // ${selection}`);
  }
};
