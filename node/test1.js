   function quickSort2(arr,a,b,qArr){ 
  var len = arr.length,leftArr=[],rightArr=[],tag,i,j,k,temp,len_l,len_r,lb,ra; 
  if(a == undefined && b == undefined){ 
    a = 0; b= arr.length-1;//初始化起始位置。 
  } 
  if(qArr == undefined){ 
    qArr = arr.slice(); 
  } 
  if(len<2){ 
    return arr; 
  } 
  if(len == 2 && arr[0] == arr[1]){ 
    return arr; 
  } 
  tag = qArr[a]; 
  for (i = 1,k = 0; i < len;) { 
    if(qArr[a+i]>=tag){ 
      rightArr.push(qArr[a+i]); 
      i++; 
    }else{ 
      temp = qArr[a+i]; 
      for(j = a+i;j>a+k;j--){ 
        qArr[j] = qArr[j-1]; 
        // this.pushHis(qArr.slice(),a,b,a+k); 
      } 
      qArr[a+k] = temp; 
      leftArr.push(temp); 
      k++; 
      i++; 
    } 
    this.pushHis(qArr.slice(),a,b,a+k,i-1); 
  } 
  len_l = leftArr.length; 
  len_r = rightArr.length; 
  if(len_l== 0){ 
    lb = a; 
  }else{ 
    lb = a+len_l -1; 
    this.sort(leftArr,a,lb,qArr); 
  } 
  if(len_r == 0){ 
    ra = b; 
  }else{ 
    ra = b + 1 - len_r; 
    this.sort(rightArr,ra,b,qArr) 
  } 
  return qArr; 
} 