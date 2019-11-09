const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

}

const phrase = ['很簡單', '很容易', '很快', '很正常']

function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateTrashtalk(options) {
  const fixword = "身為一個"
  let trashTalk = ""
  let job = ""

  if (options.career === "engineer") {
    job = "工程師"
  }
  if (options.career === "designer") {
    job = "設計師"
  }
  if (options.career === "entrepreneur") {
    job = "創業家"
  }

  trashTalk = fixword + job + sample(task[options.career]) + sample(phrase)
  return trashTalk
}
module.exports = generateTrashtalk