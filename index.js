let stream_cons, stream_car, stream_cdr, all_num, stream_ref, stream_map, stream_filter;

stream_cons = function(x, y) {
  if (typeof(y) === 'function'){
    return [x, y];
  } else {
    return [x, () =>y];
  }
}
stream_car = function(s) {
  return s[0];
}
stream_cdr = function(s) {
  return s[1]();
}

all_num = function(n) {
  return stream_cons(
    n,
    () => all_num(n+1) //NOTE: 这里需要显式的延迟
  );
}

stream_ref = function(N, s) {
  if (N==1) return stream_car(s);
  return stream_ref(N-1, stream_cdr(s));
}

integers = all_num(1);
stream_ref(5, integers);
// 5

stream_map = function(proc, s) {
  return stream_cons(
    proc(stream_car(s)),
    () => stream_map(proc, stream_cdr(s)) // 这里需要显式的延迟
  )
}
zoom = stream_map((x)=>x*2, integers);
stream_ref(5, zoom); // 10

stream_filter = function(pred, s) {
  if(pred(stream_car(s))) {
    return stream_cons(
      stream_car(s),
      () => stream_filter(pred, stream_cdr(s))
    );
  }
  return stream_filter(pred, stream_cdr(s));
}
odds = stream_filter((x) => x%2==1, integers);
stream_ref(7, odds); // 13


sieve = function(s) {
  return stream_cons(
    stream_car(s),
    () => sieve( // 显示的延迟
      stream_filter((x) => !(x % (stream_car(s))==0), stream_cdr(s))
    )
  );
}
prime = sieve(all_num(2));
stream_ref(9, prime);
// 23

for(var i=1; i<=9; i++) {
  console.log(stream_ref(i,prime));
}