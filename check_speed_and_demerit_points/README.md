# Check Speed and Demerit Points

This function checks the speed of a vehicle and calculates the corresponding demerit points if the speed exceeds the speed limit. If the number of points exceeds a threshold, the driver's license is suspended.

### Function Signature:
```javascript
function checkSpeed(speed)

## Parameters:

speed (number): The current speed of the vehicle in km/h.

## Returns:

This function does not return any value. It prints the result of the speed check to the console.

## Error Handling:

The function assumes that the input speed is a valid number. It does not handle non-numeric inputs or negative values explicitly.