describe('サンプルテスト', function () {
  it('同じ値か確認(型は無視)', function () {
    assert.equal(1, '1');
  });
  it('同じ値か確認(型も含む)', function(){
    assert.strictEqual(1, '1');
  });
});