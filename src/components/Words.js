var slodkie_slowa = [
    'kocham cię',
    'fistaszek',
    'kwiatuszek',
    'bubuś',
    'kotek',
    'myszka',
    'słodziak',
    'najlepsza dziewczyna',
    'lili',
    'smrodzie',
    'tak śpie',
    'wstyd się przyznać',
    'kaczuszka',
    'śmierdząca pacha'
]

function randomWord(){
    return slodkie_slowa[Math.floor(Math.random() * slodkie_slowa.length)]
}

export { randomWord }