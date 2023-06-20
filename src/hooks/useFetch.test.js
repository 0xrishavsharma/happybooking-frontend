import { renderHook, act } from "@testing-library/react-hooks";
import axios from "axios";
import useFetch from "./useFetch";

jest.mock("axios");

describe("useFetch", () => {
  it("fetches data successfully", async () => {
    const responseData = [{ id: 1, name: "John" }];
    axios.get.mockResolvedValueOnce({ data: responseData });

    const { result, waitForNextUpdate } = renderHook(() => useFetch("/api/data"));

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(false);
    expect(result.current.data).toEqual(responseData);
  });

  it("handles fetch error", async () => {
    axios.get.mockRejectedValueOnce(new Error("Fetch error"));

    const { result, waitForNextUpdate } = renderHook(() => useFetch("/api/data"));

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(true);
    expect(result.current.data).toEqual([]);
  });

  it("reFetch updates data", async () => {
    const initialData = [{ id: 1, name: "John" }];
    const updatedData = [{ id: 2, name: "Jane" }];
    axios.get.mockResolvedValueOnce({ data: initialData }).mockResolvedValueOnce({ data: updatedData });

    const { result, waitForNextUpdate } = renderHook(() => useFetch("/api/data"));

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(false);
    expect(result.current.data).toEqual(initialData);

    act(() => {
      result.current.reFetch();
    });

    expect(result.current.loading).toBe(true);

    await waitForNextUpdate();

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(false);
    expect(result.current.data).toEqual(updatedData);
  });
});
