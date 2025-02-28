const htmlData=`
<table>
<tbody>
<tr>
<td>
<p><strong>TN RTOs</strong></p>
</td>
<td>
<p><strong>RTO Code</strong></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">(CENTRAL)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN01</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO,CHENNAI(NORTH WEST)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN02</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO,CHENNAI(NORTH EAST)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN03</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO, CHENNAI (EAST)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN04</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">REGIONAL TRANSPORT OFFICE, CHENNAI (NORTH)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN05</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO CHENNAI(SOUTH-EAST)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN06</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO CHENNAI(SOUTH)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN07</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO, Chennai West.</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN09</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO CHENNAI(SOUTH-WEST)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN10</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO TAMBARAM</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN11</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">REGIONAL TRANSPORT OFFICE,</span></p>
<p><span style="font-weight: 400;">PARUTHIPATTU</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN12</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO, AMBATTUR</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN13</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO, SHOLINGANALLUR</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN14</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO, Ulundurpet</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN15</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO, Kalakurichi</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN15M</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO, Tindivanam &amp; Enforcement wing.</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN16</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO, REDHILLS</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN18</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO CHENGALPATTU</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN19</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO, THIRUVALLUR</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN20</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO KANCHIPURAM</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN21</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO MEENAMBAKKAM</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN22</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Regional Transport Office,</span></p>
<p><span style="font-weight: 400;">Vellore</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN23</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO KRISHNAGIRI</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN24</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO, Tiruvannamalai</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN25</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO NAMAKKAL (NORTH)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN28</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO DHARMAPURI</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN29</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO,SALEM(WEST)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN30</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO, Cuddalore</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN31</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO, Viluppuram</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN32</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO, ERODE EAST</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN33</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO Tiruchengode</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN34</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO GOBI</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN36</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">REGIONAL TRANSPORT OFFICE,</span></p>
<p><span style="font-weight: 400;">COIMBATORE (SOUTH)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN37</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO COIMBATORE NORTH</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN38</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Regional Transport Office,</span></p>
<p><span style="font-weight: 400;">Tirupur North</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN39</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">METTUPALAYAM</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN40</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">REGIONAL TRANSPORT OFFICE,</span></p>
<p><span style="font-weight: 400;">POLLACHI</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN41</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Regional Transport Office,</span></p>
<p><span style="font-weight: 400;">Tirupur South</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN42</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">REGIONAL TRANSPORT OFFICE,</span></p>
<p><span style="font-weight: 400;">OOTY</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN43</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO, TRICHY WEST</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN45</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO, PERAMBALUR</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN46</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">REGIONAL TRANSPORT OFFICE,</span></p>
<p><span style="font-weight: 400;">KARUR</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN47</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO-SRIRANGAM</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN48</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO Thanjavur</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN49</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO Tiruvarur</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN50</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO Nagapattinam</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN51</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">SANKAGIRI</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN52</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO,SALEM(EAST)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN54</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO Pudukkottai</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN55</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO PERUNDURAI</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN56</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO Dindigul</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN57</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO Madurai(South)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN58</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO Madurai (North)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN59</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO Theni</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN60</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO ARIYALUR</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN61</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO. SIVAGANGAI</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN63</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO Madurai (Central)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN64</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO, RAMANATHAPURAM</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN65</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">REGIONAL TRANSPORT OFFICE, COIMBATORE (CENTRAL)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN66</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO, VIRUDHUNAGAR</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN67</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO Kumbakonam</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN68</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">REGIONAL TRANSPORT OFFICE,</span></p>
<p><span style="font-weight: 400;">TUTICORIN</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN69</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO HOSUR</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN70</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">REGIONAL TRANSPORT OFFICE,</span></p>
<p><span style="font-weight: 400;">TIRUNELVELI</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN72</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Regional Transport Office,</span></p>
<p><span style="font-weight: 400;">Ranipet</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN73</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">REGIONAL TRANSPORT OFFICE,</span></p>
<p><span style="font-weight: 400;">NAGERCOIL</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN74</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">REGIONAL TRANSPORT OFFICE,</span></p>
<p><span style="font-weight: 400;">MARTHANDAM</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN75</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">REGIONAL TRANSPORT OFFICE,</span></p>
<p><span style="font-weight: 400;">TENKASI</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN76</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO, ATTUR</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN77</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">REGIONAL TRANSPORT OFFICE,</span></p>
<p><span style="font-weight: 400;">DHARAPURAM</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN78</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">REGIONAL TRANSPORT OFFICE,</span></p>
<p><span style="font-weight: 400;">SANKARANKOVIL</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN79</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO, TRICHY(EAST)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN81</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO Mayiladuthurai</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN82</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Regional Transport Office,</span></p>
<p><span style="font-weight: 400;">Vaniyambadi</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN83</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Regional Transport Office,</span></p>
<p><span style="font-weight: 400;">Tirupattur</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN83M</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO, SRIVILLIPUTTUR</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN84</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">Rto Kundrathur</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN85</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO ERODE WEST</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN86</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">SRIPERUMBUDUR</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN87</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO NAMAKKAL SOUTH</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN88</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO,SALEM(SOUTH)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN90</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO, Chidhambram</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN91</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">REGIONAL TRANSPORT OFFICE,</span></p>
<p><span style="font-weight: 400;">THIRUCHENDUR</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN92</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">METTUR</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN93</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO Palani</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN94</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">RTO, SIVAKASI</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN95</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">REGIONAL TRANSPORT OFFICE,</span></p>
<p><span style="font-weight: 400;">KOVILPATTI</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN96</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">REGIONAL TRANSPORT OFFICE,</span></p>
<p><span style="font-weight: 400;">ARANI</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN97</span></p>
</td>
</tr>
<tr>
<td>
<p><span style="font-weight: 400;">REGIONAL TRANSPORT OFFICE,</span></p>
<p><span style="font-weight: 400;">COIMBATORE (WEST)</span></p>
</td>
<td>
<p><span style="font-weight: 400;">TN99</span></p>
</td>
</tr>
</tbody>
</table>`
const parser=new DOMParser()
//converting string to DOM
const parsedhtml=parser.parseFromString(htmlData,"text/html")
const tbody=parsedhtml.getElementsByTagName("tbody")[0]
const tbodyChildrens=tbody.children
const rtoData=[];
//creating id
let id=1;
[...tbody.children].forEach((record) => {
    rtoData.push({
        id:id,
        code:record.children[1].innerText,
        location:record.children[0].innerText
    })
    id++;
});
console.log(rtoData);

function download(data,fileName,type){
    const aEl=document.createElement("a")
   const file= new Blob([JSON.stringify(data,null,2)],{type:type});
   aEl.href=URL.createObjectURL(file)
   aEl.download=fileName
   aEl.click()
}

download(rtoData,"data.json","application/json")




















