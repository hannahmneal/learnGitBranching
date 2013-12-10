exports.level = {
  "goalTreeString": "{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\"},\"bugFix\":{\"target\":\"C4\",\"id\":\"bugFix\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C3\"],\"id\":\"C4\"}},\"HEAD\":{\"target\":\"C4\",\"id\":\"HEAD\"}}",
  "solutionCommand": "git checkout C4",
  "startTree": "{\"branches\":{\"master\":{\"target\":\"C2\",\"id\":\"master\"},\"bugFix\":{\"target\":\"C4\",\"id\":\"bugFix\"}},\"commits\":{\"C0\":{\"parents\":[],\"id\":\"C0\",\"rootCommit\":true},\"C1\":{\"parents\":[\"C0\"],\"id\":\"C1\"},\"C2\":{\"parents\":[\"C1\"],\"id\":\"C2\"},\"C3\":{\"parents\":[\"C1\"],\"id\":\"C3\"},\"C4\":{\"parents\":[\"C3\"],\"id\":\"C4\"}},\"HEAD\":{\"target\":\"master\",\"id\":\"HEAD\"}}",
  "name": {
    "en_US": "Detach yo' HEAD",
    "zh_CN": "分离HEAD",
    "zh_TW": "分離HEAD"
  },
  "hint": {
    "en_US": "Use the label (hash) on the commit for help!",
    "zh_CN": "使用提交记录上的标签(hash)来求助！",
    "zh_TW": "使用commit上的標籤(hash)來幫助你！"
  },
  "startDialog": {
    "en_US": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## Moving around in Git",
              "",
              "Before we get to some of the more advanced features of Git, it's important to understand different ways to move through the commit tree that represents your project.",
              "",
              "Once you're comfortable moving around, your powers with other git commands will be amplified!",
              "",
              "",
              "",
              "",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## HEAD",
              "",
              "First we have to talk about \"HEAD\". HEAD is the symbolic name for the currently checked out commit -- it's essentially what commit you're working on top of.",
              "",
              "HEAD always points to the most recent commit which is reflected in the working tree. Most git commands which make changes to the working tree will start by changing HEAD.",
              "",
              "Normally HEAD points to a branch name (like bugFix). When you commit, the status of bugFix is altered and this change is visible through HEAD."
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "Let's see this in action. Here we will reveal HEAD before and after a commit."
            ],
            "afterMarkdowns": [
              "See! HEAD was hiding underneath our `master` branch all along."
            ],
            "command": "git checkout C1; git checkout master; git commit; git checkout C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "### Detaching HEAD",
              "",
              "Detaching HEAD just means attaching it to a commit instead of a branch. This is what it looks like beforehand:",
              "",
              "HEAD -> master -> C1",
              ""
            ],
            "afterMarkdowns": [
              "And now it's",
              "",
              "HEAD -> C1"
            ],
            "command": "git checkout C1",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "To complete this level, let's detach HEAD from `bugFix` and attach it to the commit instead.",
              "",
              "Specify this commit by its hash. The hash for each commit is displayed on the circle that represents the commit."
            ]
          }
        }
      ]
    },
    "zh_CN": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 在Git中前后移动",
              "",
              "在接触Git的更多高级主题之前，我们先学习用不同的方法在代表你的项目的提交记录树上前后移动。",
              "",
              "一旦能够熟练地在Git中前进后退，你使用其他git命令的威力也会被放大！",
              "",
              "",
              "",
              "",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## HEAD",
              "",
              "我们首先看一下\"HEAD\". HEAD是当前提交记录的符号名称 -- 其实就是你正在其基础进行工作的提交记录。",
              "",
              "HEAD总是指向最近一次提交记录，表现为当前工作树。大多数修改工作树的git命令都开始于改变HEAD指向。",
              "",
              "HEAD通常指向分支名（比如bugFix）。你提交时，改变了bugFix的状态，这一变化通过HEAD变得可见。"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "在实例中看一下。我们将会观察提交前后HEAD的位置。"
            ],
            "afterMarkdowns": [
              "看! HEAD一直藏在`master`分支后面。"
            ],
            "command": "git checkout C1; git checkout master; git commit; git checkout C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "### 分离 HEAD",
              "",
              "分离HEAD就是让其指向一个提交记录而不是分支名。这是命令执行之前的样子： ",
              "",
              "HEAD -> master -> C1",
              ""
            ],
            "afterMarkdowns": [
              "现在变成了",
              "",
              "HEAD -> C1"
            ],
            "command": "git checkout C1",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "想完成此关，从`bugFix`分离出HEAD并让其指向一个提交记录。",
              "",
              "通过hash值指定提交记录。每个提交记录的hash值显示在代表提交记录的圆圈中。"
            ]
          }
        }
      ]
    },
    "zh_TW": {
      "childViews": [
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## 在Git中前後移動",
              "",
              "在接觸Git的更多進階的主題之前，我們先學習用不同的方法在代表你的project的commit tree上面移動。",
              "",
              "一旦能夠熟練地在commit tree中遊走，你使用其他git指令的威力也會更強！",
              "",
              "",
              "",
              "",
              ""
            ]
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "## HEAD",
              "",
              "我們首先看一下\"HEAD\". HEAD是一個參考，它是指向目前所checkout的commit -- 基本上，其實就是你目前所在的commit。",
              "",
              "在working tree中，HEAD總是指向最近的一次commit。大部份git的指令如果要修改working tree的狀態的話，都會先改變HEAD所指向的參考。",
              "",
              "HEAD通常指向一個分支的名稱（比如bugFix）。當你commit的時候，改變了bugFix的狀態，這一個變化可以從HEAD的改變中看到。"
            ]
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "在實際的例子中。我們將會觀察commit前後HEAD的位置。"
            ],
            "afterMarkdowns": [
              "看吧！ HEAD一直藏在`master`分支的後面。"
            ],
            "command": "git checkout C1; git checkout master; git commit; git checkout C2",
            "beforeCommand": ""
          }
        },
        {
          "type": "GitDemonstrationView",
          "options": {
            "beforeMarkdowns": [
              "### 分離 HEAD",
              "",
              "分離HEAD就是讓其指向一個commit而不是分支的名稱。這是命令執行之前的樣子： ",
              "",
              "HEAD -> master -> C1",
              ""
            ],
            "afterMarkdowns": [
              "現在變成了",
              "",
              "HEAD -> C1"
            ],
            "command": "git checkout C1",
            "beforeCommand": ""
          }
        },
        {
          "type": "ModalAlert",
          "options": {
            "markdowns": [
              "想要完成這一個關卡，從`bugFix`分離出HEAD並且讓它指向一個commit。",
              "",
              "通過hash值可以指定commit。每個commit的hash值顯示在各自的圓圈中。"
            ]
          }
        }
      ]
    }
  }
};
