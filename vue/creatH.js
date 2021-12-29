          h('div',{class:['custom-tree-node','overflow']},[
                      h('span',{class:['fl']},node.label),
                      h('span',{class:['fr']},[
                          h('el-button',{props:{type:'text'}},'添加'),
                          h('el-button',{props:{type:'text'}},'删除')
                      ])
                  ])