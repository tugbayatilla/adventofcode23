import { expect } from "chai";
import { DayAndPart, createMap, createMapRange, findMaps, Map, MapRange, findMappingValue } from ".";


describe(`${DayAndPart}: Create Range from a line`, () => {

  it(`should '50 98 2' `, () => {
    expect(createMapRange('50 98 2')).to.be.deep.equal(
      { src: 98, dest: 50, len: 2 });
  });

  it(`should '52 50 48' `, () => {
    expect(createMapRange('52 50 48')).to.be.deep.equal(
      { src: 50, dest: 52, len: 48 });
  });

});


describe(`${DayAndPart}: Create Map from lines`, () => {

  describe(`${DayAndPart}: Seed to soil map`, () => {

    const lines = [
      'seed-to-soil map:',
      '50 98 2',
      '52 50 48'
    ]

    it(`should 'from' be 'seed' `, () => {
      expect(createMap(lines)).to.be.deep.contain(
        { from: 'seed' });
    });

    it(`should 'to' be 'soil' `, () => {
      expect(createMap(lines)).to.be.deep.contain(
        { to: 'soil' });
    });

    it(`should first 'range' be {src:98, dest:50, len:2}`, () => {
      expect(createMap(lines).ranges[0]).to.be.deep.contain(
        { src: 98, dest: 50, len: 2 });
    });

    it(`should second 'range' be {src:50, dest:52, len:48}`, () => {
      expect(createMap(lines).ranges[1]).to.be.deep.contain(
        { src: 50, dest: 52, len: 48 });
    });


  });

});


describe(`${DayAndPart}: finding maps`, () => {

  const lines = [
    'seeds: 79 14 55 13',
    '',
    'seed-to-soil map:',
    '50 98 2',
    '52 50 48',
    '',
    'soil-to-fertilizer map:',
    '0 15 37',
    '37 52 2',
    '39 0 15',
  ]

  it(`should length be 2 `, () => {
    expect(findMaps(lines).length).to.be.equal(2);
  });

  it(`should second map contain soil, fetrilier and ranges`, () => {
    expect(findMaps(lines)[1]).to.be.deep.contain(<Map>{
      from: 'soil',
      to: 'fertilizer',
      ranges: [
        <MapRange>{ src: 15, dest: 0, len: 37 },
        <MapRange>{ src: 52, dest: 37, len: 2 },
        <MapRange>{ src: 0, dest: 39, len: 15 }
      ]
    });
  });


});


describe(`${DayAndPart}: finding value 'seed to soil'`, () => {

  const map: Map = {
    from: 'seed',
    to: 'soil',
    ranges: [
      <MapRange>{ src: 98, dest: 50, len: 2 },
      <MapRange>{ src: 50, dest: 52, len: 48 }
    ]
  }

  it(`Seed number 79 corresponds to soil number 81 `, () => {
    expect(findMappingValue(79, map)).to.be.equal(81);
  });

  it(`Seed number 14 corresponds to soil number 14 `, () => {
    expect(findMappingValue(14, map)).to.be.equal(14);
  });

  it(`Seed number 55 corresponds to soil number 57 `, () => {
    expect(findMappingValue(55, map)).to.be.equal(57);
  });

  it(`Seed number 13 corresponds to soil number 13 `, () => {
    expect(findMappingValue(13, map)).to.be.equal(13);
  });



});