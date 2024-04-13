# Lorem ipsum Encosure Scheme (LES)

This encosure scheme uses lorem ipsum to store data.

Bits in bytes are talked about as LSb to MSb.
This means that the 1's place bit is bit 0 and the 128's place bit is bit 7.
Byte sequences start with the MSb first.

Every bit controls the case in a character

| bit | case      |
| --- | --------- |
| 0   | lowercase |
| 1   | uppercase |

To turn a byte into an LES byte:
1. Get the next 8 characters of lorem ipsum (spaces and periods don't count).
2. Set each character's case depending on the bit value (shown above).

For example, to turn `A` into LES:
1. Get 8 characters of lorem ipsum: `lorem ips`
2. Turn `A` into binary: `01000001`
3. Set the characters' cases: `01000 001` -> `lOrem ipS`

## Lorem ipsum sequence

There are no newlines in the actual sequence (they're replaced by spaces).

```text
lorem ipsum dolor sit amet, consectetur adipiscing elit.
vivamus imperdiet lorem vel mauris ultrices, nec ultricies turpis tempor.
fusce quis semper mi. sed arcu ex, lacinia nec ullamcorper ac, fermentum vel lorem.
proin sed neque sollicitudin, imperdiet dui eget, porta massa.
aliquam varius leo vel quam dapibus, quis eleifend ipsum pellentesque.
in risus nisi, condimentum vitae vulputate id, venenatis et dolor.
aenean vehicula lacinia ornare. mauris lobortis tincidunt diam sit amet consequat.
aenean maximus, nulla ut venenatis tempor, neque lacus tincidunt odio, quis mollis mi tellus sit amet libero.
donec tempor justo eget enim dapibus, nec posuere quam rutrum. duis consectetur odio eros, eu varius sapien mollis a.
vestibulum molestie lacinia fringilla. curabitur non feugiat nunc. fusce auctor vel odio sit amet mattis.
nam ac maximus urna. integer a velit sem.
nunc purus justo, egestas non ex id, consequat maximus magna.
mauris tempor purus eget arcu lobortis, ultricies mollis urna interdum.
aenean eros magna, gravida at libero sed, semper pellentesque nisi.
donec porta consectetur lacus, vel rhoncus neque ullamcorper a.
sed sed laoreet arcu.
donec et egestas lectus, eu elementum sapien. vivamus lacus odio, elementum id elit at, rhoncus rutrum ex.
donec non tempor eros. suspendisse hendrerit scelerisque mauris eu convallis.
aenean id dui in est tincidunt convallis quis quis libero. in vel ultricies arcu.
ut suscipit elit sem, eu euismod augue hendrerit eget.
curabitur porttitor lectus non rutrum dignissim. duis hendrerit non massa nec tincidunt.
sed et maximus velit. morbi a ante risus.
```