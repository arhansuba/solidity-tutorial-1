const submitCreate = async (e) => {
  e.preventDefault();

  if (!ethereum) {
    console.error('Ethereum object is required to create a keyboard');
    return;
  }

  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const keyboardsContract = new ethers.Contract(contractAddress, contractABI, signer);

  const createTxn = await keyboardsContract.create(newKeyboard);
  console.log('Create transaction started...', createTxn.hash);

  await createTxn.wait();
  console.log('Created keyboard!', createTxn.hash);

  await getKeyboards();
}
if (keyboards.length > 0) {
  // this remains the same  
  return (...) 
}
const [keyboardsLoading, setKeyboardsLoading] = useState(false);
const getKeyboards = async () => {
  if (ethereum && connectedAccount) {
    setKeyboardsLoading(true);
    try {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const keyboardsContract = new ethers.Contract(contractAddress, contractABI, signer);

      const keyboards = await keyboardsContract.getKeyboards();
      console.log('Retrieved keyboards...', keyboards)
      
      setKeyboards(keyboards)
    } finally {
      setKeyboardsLoading(false);
    }
  }
}
// this is the new one
if (keyboardsLoading) {
  return (
    <div className="flex flex-col gap-4">
      <PrimaryButton type="link" href="/create">Create a Keyboard!</PrimaryButton>
      <p>Loading Keyboards...</p>
    </div>
  )
}

// No keyboards yet
// this remains the same
return (...)
